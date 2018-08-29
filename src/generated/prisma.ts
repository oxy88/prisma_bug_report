import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    shops: <T = Shop[]>(args: { where?: ShopWhereInput, orderBy?: ShopOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    owners: <T = Owner[]>(args: { where?: OwnerWhereInput, orderBy?: OwnerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fruits: <T = Fruit[]>(args: { where?: FruitWhereInput, orderBy?: FruitOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    colors: <T = Color[]>(args: { where?: ColorWhereInput, orderBy?: ColorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shop: <T = Shop | null>(args: { where: ShopWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    owner: <T = Owner | null>(args: { where: OwnerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fruit: <T = Fruit | null>(args: { where: FruitWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    color: <T = Color | null>(args: { where: ColorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shopsConnection: <T = ShopConnection>(args: { where?: ShopWhereInput, orderBy?: ShopOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ownersConnection: <T = OwnerConnection>(args: { where?: OwnerWhereInput, orderBy?: OwnerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fruitsConnection: <T = FruitConnection>(args: { where?: FruitWhereInput, orderBy?: FruitOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    colorsConnection: <T = ColorConnection>(args: { where?: ColorWhereInput, orderBy?: ColorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createShop: <T = Shop>(args: { data: ShopCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOwner: <T = Owner>(args: { data: OwnerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFruit: <T = Fruit>(args: { data: FruitCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createColor: <T = Color>(args: { data: ColorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateShop: <T = Shop | null>(args: { data: ShopUpdateInput, where: ShopWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOwner: <T = Owner | null>(args: { data: OwnerUpdateInput, where: OwnerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFruit: <T = Fruit | null>(args: { data: FruitUpdateInput, where: FruitWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateColor: <T = Color | null>(args: { data: ColorUpdateInput, where: ColorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteShop: <T = Shop | null>(args: { where: ShopWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOwner: <T = Owner | null>(args: { where: OwnerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFruit: <T = Fruit | null>(args: { where: FruitWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteColor: <T = Color | null>(args: { where: ColorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertShop: <T = Shop>(args: { where: ShopWhereUniqueInput, create: ShopCreateInput, update: ShopUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOwner: <T = Owner>(args: { where: OwnerWhereUniqueInput, create: OwnerCreateInput, update: OwnerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFruit: <T = Fruit>(args: { where: FruitWhereUniqueInput, create: FruitCreateInput, update: FruitUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertColor: <T = Color>(args: { where: ColorWhereUniqueInput, create: ColorCreateInput, update: ColorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyShops: <T = BatchPayload>(args: { data: ShopUpdateInput, where?: ShopWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOwners: <T = BatchPayload>(args: { data: OwnerUpdateInput, where?: OwnerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFruits: <T = BatchPayload>(args: { data: FruitUpdateInput, where?: FruitWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyColors: <T = BatchPayload>(args: { data: ColorUpdateInput, where?: ColorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyShops: <T = BatchPayload>(args: { where?: ShopWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOwners: <T = BatchPayload>(args: { where?: OwnerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFruits: <T = BatchPayload>(args: { where?: FruitWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyColors: <T = BatchPayload>(args: { where?: ColorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    shop: <T = ShopSubscriptionPayload | null>(args: { where?: ShopSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    owner: <T = OwnerSubscriptionPayload | null>(args: { where?: OwnerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    fruit: <T = FruitSubscriptionPayload | null>(args: { where?: FruitSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    color: <T = ColorSubscriptionPayload | null>(args: { where?: ColorSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Shop: (where?: ShopWhereInput) => Promise<boolean>
  Owner: (where?: OwnerWhereInput) => Promise<boolean>
  Fruit: (where?: FruitWhereInput) => Promise<boolean>
  Color: (where?: ColorWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateColor {
  count: Int!
}

type AggregateFruit {
  count: Int!
}

type AggregateOwner {
  count: Int!
}

type AggregateShop {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Color implements Node {
  id: ID!
  fruit(where: FruitWhereInput): Fruit
}

"""A connection to a list of items."""
type ColorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ColorEdge]!
  aggregate: AggregateColor!
}

input ColorCreateInput {
  fruit: FruitCreateOneWithoutColorInput
}

input ColorCreateOneWithoutFruitInput {
  connect: ColorWhereUniqueInput
}

"""An edge in a connection."""
type ColorEdge {
  """The item at the end of the edge."""
  node: Color!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ColorOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ColorPreviousValues {
  id: ID!
}

type ColorSubscriptionPayload {
  mutation: MutationType!
  node: Color
  updatedFields: [String!]
  previousValues: ColorPreviousValues
}

input ColorSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ColorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ColorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ColorSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ColorWhereInput
}

input ColorUpdateInput {
  fruit: FruitUpdateOneWithoutColorInput
}

input ColorUpdateOneWithoutFruitInput {
  connect: ColorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
}

input ColorWhereInput {
  """Logical AND on all given filters."""
  AND: [ColorWhereInput!]

  """Logical OR on all given filters."""
  OR: [ColorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ColorWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  fruit: FruitWhereInput
}

input ColorWhereUniqueInput {
  id: ID
}

type Fruit implements Node {
  id: ID!
  owner(where: OwnerWhereInput): Owner
  color(where: ColorWhereInput): Color
}

"""A connection to a list of items."""
type FruitConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FruitEdge]!
  aggregate: AggregateFruit!
}

input FruitCreateInput {
  owner: OwnerCreateOneWithoutFavoriteFruitsInput
  color: ColorCreateOneWithoutFruitInput
}

input FruitCreateManyWithoutOwnerInput {
  create: [FruitCreateWithoutOwnerInput!]
  connect: [FruitWhereUniqueInput!]
}

input FruitCreateOneWithoutColorInput {
  create: FruitCreateWithoutColorInput
  connect: FruitWhereUniqueInput
}

input FruitCreateWithoutColorInput {
  owner: OwnerCreateOneWithoutFavoriteFruitsInput
}

input FruitCreateWithoutOwnerInput {
  color: ColorCreateOneWithoutFruitInput
}

"""An edge in a connection."""
type FruitEdge {
  """The item at the end of the edge."""
  node: Fruit!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FruitOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FruitPreviousValues {
  id: ID!
}

type FruitSubscriptionPayload {
  mutation: MutationType!
  node: Fruit
  updatedFields: [String!]
  previousValues: FruitPreviousValues
}

input FruitSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FruitSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FruitSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FruitSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FruitWhereInput
}

input FruitUpdateInput {
  owner: OwnerUpdateOneWithoutFavoriteFruitsInput
  color: ColorUpdateOneWithoutFruitInput
}

input FruitUpdateManyWithoutOwnerInput {
  create: [FruitCreateWithoutOwnerInput!]
  connect: [FruitWhereUniqueInput!]
  disconnect: [FruitWhereUniqueInput!]
  delete: [FruitWhereUniqueInput!]
  update: [FruitUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [FruitUpsertWithWhereUniqueWithoutOwnerInput!]
}

input FruitUpdateOneWithoutColorInput {
  create: FruitCreateWithoutColorInput
  connect: FruitWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FruitUpdateWithoutColorDataInput
  upsert: FruitUpsertWithoutColorInput
}

input FruitUpdateWithoutColorDataInput {
  owner: OwnerUpdateOneWithoutFavoriteFruitsInput
}

input FruitUpdateWithoutOwnerDataInput {
  color: ColorUpdateOneWithoutFruitInput
}

input FruitUpdateWithWhereUniqueWithoutOwnerInput {
  where: FruitWhereUniqueInput!
  data: FruitUpdateWithoutOwnerDataInput!
}

input FruitUpsertWithoutColorInput {
  update: FruitUpdateWithoutColorDataInput!
  create: FruitCreateWithoutColorInput!
}

input FruitUpsertWithWhereUniqueWithoutOwnerInput {
  where: FruitWhereUniqueInput!
  update: FruitUpdateWithoutOwnerDataInput!
  create: FruitCreateWithoutOwnerInput!
}

input FruitWhereInput {
  """Logical AND on all given filters."""
  AND: [FruitWhereInput!]

  """Logical OR on all given filters."""
  OR: [FruitWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FruitWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  owner: OwnerWhereInput
  color: ColorWhereInput
}

input FruitWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createShop(data: ShopCreateInput!): Shop!
  createOwner(data: OwnerCreateInput!): Owner!
  createFruit(data: FruitCreateInput!): Fruit!
  createColor(data: ColorCreateInput!): Color!
  updateShop(data: ShopUpdateInput!, where: ShopWhereUniqueInput!): Shop
  updateOwner(data: OwnerUpdateInput!, where: OwnerWhereUniqueInput!): Owner
  updateFruit(data: FruitUpdateInput!, where: FruitWhereUniqueInput!): Fruit
  updateColor(data: ColorUpdateInput!, where: ColorWhereUniqueInput!): Color
  deleteShop(where: ShopWhereUniqueInput!): Shop
  deleteOwner(where: OwnerWhereUniqueInput!): Owner
  deleteFruit(where: FruitWhereUniqueInput!): Fruit
  deleteColor(where: ColorWhereUniqueInput!): Color
  upsertShop(where: ShopWhereUniqueInput!, create: ShopCreateInput!, update: ShopUpdateInput!): Shop!
  upsertOwner(where: OwnerWhereUniqueInput!, create: OwnerCreateInput!, update: OwnerUpdateInput!): Owner!
  upsertFruit(where: FruitWhereUniqueInput!, create: FruitCreateInput!, update: FruitUpdateInput!): Fruit!
  upsertColor(where: ColorWhereUniqueInput!, create: ColorCreateInput!, update: ColorUpdateInput!): Color!
  updateManyShops(data: ShopUpdateInput!, where: ShopWhereInput): BatchPayload!
  updateManyOwners(data: OwnerUpdateInput!, where: OwnerWhereInput): BatchPayload!
  updateManyFruits(data: FruitUpdateInput!, where: FruitWhereInput): BatchPayload!
  updateManyColors(data: ColorUpdateInput!, where: ColorWhereInput): BatchPayload!
  deleteManyShops(where: ShopWhereInput): BatchPayload!
  deleteManyOwners(where: OwnerWhereInput): BatchPayload!
  deleteManyFruits(where: FruitWhereInput): BatchPayload!
  deleteManyColors(where: ColorWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Owner implements Node {
  id: ID!
  shop(where: ShopWhereInput): Shop
  favoriteFruits(where: FruitWhereInput, orderBy: FruitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fruit!]
}

"""A connection to a list of items."""
type OwnerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OwnerEdge]!
  aggregate: AggregateOwner!
}

input OwnerCreateInput {
  shop: ShopCreateOneWithoutOwnerInput
  favoriteFruits: FruitCreateManyWithoutOwnerInput
}

input OwnerCreateOneWithoutFavoriteFruitsInput {
  create: OwnerCreateWithoutFavoriteFruitsInput
  connect: OwnerWhereUniqueInput
}

input OwnerCreateOneWithoutShopInput {
  create: OwnerCreateWithoutShopInput
  connect: OwnerWhereUniqueInput
}

input OwnerCreateWithoutFavoriteFruitsInput {
  shop: ShopCreateOneWithoutOwnerInput
}

input OwnerCreateWithoutShopInput {
  favoriteFruits: FruitCreateManyWithoutOwnerInput
}

"""An edge in a connection."""
type OwnerEdge {
  """The item at the end of the edge."""
  node: Owner!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OwnerOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OwnerPreviousValues {
  id: ID!
}

type OwnerSubscriptionPayload {
  mutation: MutationType!
  node: Owner
  updatedFields: [String!]
  previousValues: OwnerPreviousValues
}

input OwnerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OwnerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OwnerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OwnerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OwnerWhereInput
}

input OwnerUpdateInput {
  shop: ShopUpdateOneWithoutOwnerInput
  favoriteFruits: FruitUpdateManyWithoutOwnerInput
}

input OwnerUpdateOneWithoutFavoriteFruitsInput {
  create: OwnerCreateWithoutFavoriteFruitsInput
  connect: OwnerWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OwnerUpdateWithoutFavoriteFruitsDataInput
  upsert: OwnerUpsertWithoutFavoriteFruitsInput
}

input OwnerUpdateOneWithoutShopInput {
  create: OwnerCreateWithoutShopInput
  connect: OwnerWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OwnerUpdateWithoutShopDataInput
  upsert: OwnerUpsertWithoutShopInput
}

input OwnerUpdateWithoutFavoriteFruitsDataInput {
  shop: ShopUpdateOneWithoutOwnerInput
}

input OwnerUpdateWithoutShopDataInput {
  favoriteFruits: FruitUpdateManyWithoutOwnerInput
}

input OwnerUpsertWithoutFavoriteFruitsInput {
  update: OwnerUpdateWithoutFavoriteFruitsDataInput!
  create: OwnerCreateWithoutFavoriteFruitsInput!
}

input OwnerUpsertWithoutShopInput {
  update: OwnerUpdateWithoutShopDataInput!
  create: OwnerCreateWithoutShopInput!
}

input OwnerWhereInput {
  """Logical AND on all given filters."""
  AND: [OwnerWhereInput!]

  """Logical OR on all given filters."""
  OR: [OwnerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OwnerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  shop: ShopWhereInput
  favoriteFruits_every: FruitWhereInput
  favoriteFruits_some: FruitWhereInput
  favoriteFruits_none: FruitWhereInput
}

input OwnerWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  shops(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shop]!
  owners(where: OwnerWhereInput, orderBy: OwnerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Owner]!
  fruits(where: FruitWhereInput, orderBy: FruitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fruit]!
  colors(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Color]!
  shop(where: ShopWhereUniqueInput!): Shop
  owner(where: OwnerWhereUniqueInput!): Owner
  fruit(where: FruitWhereUniqueInput!): Fruit
  color(where: ColorWhereUniqueInput!): Color
  shopsConnection(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShopConnection!
  ownersConnection(where: OwnerWhereInput, orderBy: OwnerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OwnerConnection!
  fruitsConnection(where: FruitWhereInput, orderBy: FruitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FruitConnection!
  colorsConnection(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ColorConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Shop implements Node {
  id: ID!
  owner(where: OwnerWhereInput): Owner
}

"""A connection to a list of items."""
type ShopConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ShopEdge]!
  aggregate: AggregateShop!
}

input ShopCreateInput {
  owner: OwnerCreateOneWithoutShopInput
}

input ShopCreateOneWithoutOwnerInput {
  connect: ShopWhereUniqueInput
}

"""An edge in a connection."""
type ShopEdge {
  """The item at the end of the edge."""
  node: Shop!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ShopOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ShopPreviousValues {
  id: ID!
}

type ShopSubscriptionPayload {
  mutation: MutationType!
  node: Shop
  updatedFields: [String!]
  previousValues: ShopPreviousValues
}

input ShopSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ShopSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShopSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShopSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ShopWhereInput
}

input ShopUpdateInput {
  owner: OwnerUpdateOneWithoutShopInput
}

input ShopUpdateOneWithoutOwnerInput {
  connect: ShopWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
}

input ShopWhereInput {
  """Logical AND on all given filters."""
  AND: [ShopWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShopWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShopWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  owner: OwnerWhereInput
}

input ShopWhereUniqueInput {
  id: ID
}

type Subscription {
  shop(where: ShopSubscriptionWhereInput): ShopSubscriptionPayload
  owner(where: OwnerSubscriptionWhereInput): OwnerSubscriptionPayload
  fruit(where: FruitSubscriptionWhereInput): FruitSubscriptionPayload
  color(where: ColorSubscriptionWhereInput): ColorSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type FruitOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ShopOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OwnerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ColorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ShopCreateOneWithoutOwnerInput {
  connect?: ShopWhereUniqueInput
}

export interface ShopWhereInput {
  AND?: ShopWhereInput[] | ShopWhereInput
  OR?: ShopWhereInput[] | ShopWhereInput
  NOT?: ShopWhereInput[] | ShopWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  owner?: OwnerWhereInput
}

export interface OwnerUpdateInput {
  shop?: ShopUpdateOneWithoutOwnerInput
  favoriteFruits?: FruitUpdateManyWithoutOwnerInput
}

export interface FruitUpdateManyWithoutOwnerInput {
  create?: FruitCreateWithoutOwnerInput[] | FruitCreateWithoutOwnerInput
  connect?: FruitWhereUniqueInput[] | FruitWhereUniqueInput
  disconnect?: FruitWhereUniqueInput[] | FruitWhereUniqueInput
  delete?: FruitWhereUniqueInput[] | FruitWhereUniqueInput
  update?: FruitUpdateWithWhereUniqueWithoutOwnerInput[] | FruitUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: FruitUpsertWithWhereUniqueWithoutOwnerInput[] | FruitUpsertWithWhereUniqueWithoutOwnerInput
}

export interface OwnerUpsertWithoutShopInput {
  update: OwnerUpdateWithoutShopDataInput
  create: OwnerCreateWithoutShopInput
}

export interface OwnerCreateWithoutFavoriteFruitsInput {
  shop?: ShopCreateOneWithoutOwnerInput
}

export interface FruitUpsertWithWhereUniqueWithoutOwnerInput {
  where: FruitWhereUniqueInput
  update: FruitUpdateWithoutOwnerDataInput
  create: FruitCreateWithoutOwnerInput
}

export interface ColorSubscriptionWhereInput {
  AND?: ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput
  OR?: ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput
  NOT?: ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ColorWhereInput
}

export interface ColorUpdateOneWithoutFruitInput {
  connect?: ColorWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
}

export interface OwnerSubscriptionWhereInput {
  AND?: OwnerSubscriptionWhereInput[] | OwnerSubscriptionWhereInput
  OR?: OwnerSubscriptionWhereInput[] | OwnerSubscriptionWhereInput
  NOT?: OwnerSubscriptionWhereInput[] | OwnerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OwnerWhereInput
}

export interface ShopCreateInput {
  owner?: OwnerCreateOneWithoutShopInput
}

export interface ColorWhereInput {
  AND?: ColorWhereInput[] | ColorWhereInput
  OR?: ColorWhereInput[] | ColorWhereInput
  NOT?: ColorWhereInput[] | ColorWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  fruit?: FruitWhereInput
}

export interface OwnerCreateOneWithoutShopInput {
  create?: OwnerCreateWithoutShopInput
  connect?: OwnerWhereUniqueInput
}

export interface ShopWhereUniqueInput {
  id?: ID_Input
}

export interface OwnerCreateWithoutShopInput {
  favoriteFruits?: FruitCreateManyWithoutOwnerInput
}

export interface FruitWhereUniqueInput {
  id?: ID_Input
}

export interface FruitCreateManyWithoutOwnerInput {
  create?: FruitCreateWithoutOwnerInput[] | FruitCreateWithoutOwnerInput
  connect?: FruitWhereUniqueInput[] | FruitWhereUniqueInput
}

export interface ShopSubscriptionWhereInput {
  AND?: ShopSubscriptionWhereInput[] | ShopSubscriptionWhereInput
  OR?: ShopSubscriptionWhereInput[] | ShopSubscriptionWhereInput
  NOT?: ShopSubscriptionWhereInput[] | ShopSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ShopWhereInput
}

export interface FruitCreateWithoutOwnerInput {
  color?: ColorCreateOneWithoutFruitInput
}

export interface FruitUpdateWithoutColorDataInput {
  owner?: OwnerUpdateOneWithoutFavoriteFruitsInput
}

export interface ColorCreateOneWithoutFruitInput {
  connect?: ColorWhereUniqueInput
}

export interface ColorUpdateInput {
  fruit?: FruitUpdateOneWithoutColorInput
}

export interface OwnerCreateInput {
  shop?: ShopCreateOneWithoutOwnerInput
  favoriteFruits?: FruitCreateManyWithoutOwnerInput
}

export interface OwnerUpdateWithoutFavoriteFruitsDataInput {
  shop?: ShopUpdateOneWithoutOwnerInput
}

export interface FruitUpdateWithoutOwnerDataInput {
  color?: ColorUpdateOneWithoutFruitInput
}

export interface FruitUpdateInput {
  owner?: OwnerUpdateOneWithoutFavoriteFruitsInput
  color?: ColorUpdateOneWithoutFruitInput
}

export interface FruitCreateInput {
  owner?: OwnerCreateOneWithoutFavoriteFruitsInput
  color?: ColorCreateOneWithoutFruitInput
}

export interface OwnerWhereInput {
  AND?: OwnerWhereInput[] | OwnerWhereInput
  OR?: OwnerWhereInput[] | OwnerWhereInput
  NOT?: OwnerWhereInput[] | OwnerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  shop?: ShopWhereInput
  favoriteFruits_every?: FruitWhereInput
  favoriteFruits_some?: FruitWhereInput
  favoriteFruits_none?: FruitWhereInput
}

export interface OwnerCreateOneWithoutFavoriteFruitsInput {
  create?: OwnerCreateWithoutFavoriteFruitsInput
  connect?: OwnerWhereUniqueInput
}

export interface OwnerWhereUniqueInput {
  id?: ID_Input
}

export interface FruitUpdateWithWhereUniqueWithoutOwnerInput {
  where: FruitWhereUniqueInput
  data: FruitUpdateWithoutOwnerDataInput
}

export interface FruitUpsertWithoutColorInput {
  update: FruitUpdateWithoutColorDataInput
  create: FruitCreateWithoutColorInput
}

export interface ColorCreateInput {
  fruit?: FruitCreateOneWithoutColorInput
}

export interface OwnerUpsertWithoutFavoriteFruitsInput {
  update: OwnerUpdateWithoutFavoriteFruitsDataInput
  create: OwnerCreateWithoutFavoriteFruitsInput
}

export interface FruitCreateOneWithoutColorInput {
  create?: FruitCreateWithoutColorInput
  connect?: FruitWhereUniqueInput
}

export interface ShopUpdateOneWithoutOwnerInput {
  connect?: ShopWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
}

export interface OwnerUpdateWithoutShopDataInput {
  favoriteFruits?: FruitUpdateManyWithoutOwnerInput
}

export interface OwnerUpdateOneWithoutShopInput {
  create?: OwnerCreateWithoutShopInput
  connect?: OwnerWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OwnerUpdateWithoutShopDataInput
  upsert?: OwnerUpsertWithoutShopInput
}

export interface ShopUpdateInput {
  owner?: OwnerUpdateOneWithoutShopInput
}

export interface FruitCreateWithoutColorInput {
  owner?: OwnerCreateOneWithoutFavoriteFruitsInput
}

export interface FruitSubscriptionWhereInput {
  AND?: FruitSubscriptionWhereInput[] | FruitSubscriptionWhereInput
  OR?: FruitSubscriptionWhereInput[] | FruitSubscriptionWhereInput
  NOT?: FruitSubscriptionWhereInput[] | FruitSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FruitWhereInput
}

export interface OwnerUpdateOneWithoutFavoriteFruitsInput {
  create?: OwnerCreateWithoutFavoriteFruitsInput
  connect?: OwnerWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OwnerUpdateWithoutFavoriteFruitsDataInput
  upsert?: OwnerUpsertWithoutFavoriteFruitsInput
}

export interface FruitUpdateOneWithoutColorInput {
  create?: FruitCreateWithoutColorInput
  connect?: FruitWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FruitUpdateWithoutColorDataInput
  upsert?: FruitUpsertWithoutColorInput
}

export interface ColorWhereUniqueInput {
  id?: ID_Input
}

export interface FruitWhereInput {
  AND?: FruitWhereInput[] | FruitWhereInput
  OR?: FruitWhereInput[] | FruitWhereInput
  NOT?: FruitWhereInput[] | FruitWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  owner?: OwnerWhereInput
  color?: ColorWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ColorPreviousValues {
  id: ID_Output
}

export interface BatchPayload {
  count: Long
}

export interface Shop extends Node {
  id: ID_Output
  owner?: Owner
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface FruitSubscriptionPayload {
  mutation: MutationType
  node?: Fruit
  updatedFields?: String[]
  previousValues?: FruitPreviousValues
}

export interface Owner extends Node {
  id: ID_Output
  shop?: Shop
  favoriteFruits?: Fruit[]
}

export interface AggregateColor {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ColorEdge {
  node: Color
  cursor: String
}

export interface AggregateFruit {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ShopConnection {
  pageInfo: PageInfo
  edges: ShopEdge[]
  aggregate: AggregateShop
}

/*
 * A connection to a list of items.

 */
export interface FruitConnection {
  pageInfo: PageInfo
  edges: FruitEdge[]
  aggregate: AggregateFruit
}

export interface Color extends Node {
  id: ID_Output
  fruit?: Fruit
}

/*
 * An edge in a connection.

 */
export interface OwnerEdge {
  node: Owner
  cursor: String
}

export interface ShopSubscriptionPayload {
  mutation: MutationType
  node?: Shop
  updatedFields?: String[]
  previousValues?: ShopPreviousValues
}

export interface AggregateShop {
  count: Int
}

export interface ShopPreviousValues {
  id: ID_Output
}

export interface ColorSubscriptionPayload {
  mutation: MutationType
  node?: Color
  updatedFields?: String[]
  previousValues?: ColorPreviousValues
}

/*
 * An edge in a connection.

 */
export interface FruitEdge {
  node: Fruit
  cursor: String
}

export interface FruitPreviousValues {
  id: ID_Output
}

export interface OwnerPreviousValues {
  id: ID_Output
}

export interface OwnerSubscriptionPayload {
  mutation: MutationType
  node?: Owner
  updatedFields?: String[]
  previousValues?: OwnerPreviousValues
}

export interface Fruit extends Node {
  id: ID_Output
  owner?: Owner
  color?: Color
}

export interface AggregateOwner {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ColorConnection {
  pageInfo: PageInfo
  edges: ColorEdge[]
  aggregate: AggregateColor
}

/*
 * An edge in a connection.

 */
export interface ShopEdge {
  node: Shop
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface OwnerConnection {
  pageInfo: PageInfo
  edges: OwnerEdge[]
  aggregate: AggregateOwner
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number