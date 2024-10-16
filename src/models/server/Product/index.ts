import { Filter, ObjectId, WithId } from "mongodb";
import mongoDao from "@/lib/mongodb/mongo-dao";
import { IProductFe } from "@/models/client/ProductFe";

export type IProduct = {
  _id?: ObjectId;
  name: string;
  description: string;
  price: number;
  created: Date;
  v: number;
};

export class Product implements WithId<IProduct> {
  _id: ObjectId;
  name: string;
  description: string;
  price: number;
  created: Date;
  v: number;

  static get collectionName() {
    return "products";
  }

  constructor(iProduct: IProduct) {
    this.fromInterface(iProduct);
  }

  static async create(
    name: string,
    description: string,
    price: number,
  ): Promise<Product | null> {
    const iProduct = await mongoDao.insertOne<IProduct>(
      Product.collectionName,
      {
        name,
        description,
        price,
        created: new Date(),
        v: 1,
      },
    );
    return iProduct ? new Product(iProduct) : null;
  }

  static async getById(_id: ObjectId): Promise<Product | null> {
    const iProduct = await mongoDao.findOne<IProduct>(Product.collectionName, {
      _id,
    });
    return iProduct ? new Product(iProduct) : null;
  }

  async patch(fields: Partial<IProduct>): Promise<void> {
    const result = await mongoDao.updateOne<IProduct>(
      Product.collectionName,
      {
        _id: this._id,
      },
      {
        $set: fields,
      },
    );
    if (result.modifiedCount !== 1) {
      throw new Error("Patch op was not applied successfully");
    }
    await this.refresh();
  }

  static async delete(_id: ObjectId): Promise<void> {
    const result = await mongoDao.deleteOne<IProduct>(Product.collectionName, {
      _id,
    });
    if (result.deletedCount !== 1) {
      throw new Error("Delete op was not applied successfully");
    }
  }

  static async getList(
    filter: Filter<IProduct> = {},
    {
      limit = 10,
      skip = 0,
      sort = [],
      projection = null,
    }: {
      limit?: number;
      skip?: number;
      sort?: {
        by: keyof IProduct;
        asc: boolean;
      }[];
      projection?: Document;
    } = {
      limit: 10,
      skip: 0,
      sort: [],
      projection: null,
    },
  ): Promise<Product[]> {
    const iProducts = await mongoDao.findMany<IProduct>(
      Product.collectionName,
      filter,
      {
        limit,
        skip,
        sort: sort.length
          ? Object.fromEntries(sort.map((pair) => [pair.by, pair.asc ? 1 : -1]))
          : undefined,
        projection,
      },
    );
    return iProducts.map((iProduct) => new Product(iProduct));
  }

  toClientVersion(): IProductFe {
    return {
      _id: this._id.toHexString(),
      name: this.name,
      description: this.description,
      price: this.price,
    };
  }

  static async deleteMany() {
    await mongoDao.deleteMany<IProduct>(Product.collectionName, {});
  }
  /* Mostly for internal use */

  fromInterface(iProduct: IProduct) {
    if (!iProduct._id) {
      throw new Error("Interface object doesn't have an _id");
    }
    this._id = iProduct._id;
    this.name = iProduct.name;
    this.description = iProduct.description;
    this.price = iProduct.price;
    this.created = iProduct.created;
    this.v = iProduct.v;
  }

  async refresh() {
    const iProduct = await mongoDao.findOne<IProduct>(Product.collectionName, {
      _id: this._id,
    });
    if (iProduct) {
      this.fromInterface(iProduct);
    } else {
      throw new Error("Couldn't find document in DB");
    }
  }
}
