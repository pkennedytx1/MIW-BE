// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from 'graphql';
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model,
} from 'prisma-client-lib';
import { typeDefs } from './prisma-schema';

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any },
  ) => Promise<T>;

  /**
   * Queries
   */

  post: (where: PostWhereUniqueInput) => PostNullablePromise;
  posts: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: string;
    before?: string;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Post>;
  postsConnection: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: string;
    before?: string;
    first?: Int;
    last?: Int;
  }) => PostConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: string;
    before?: string;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: string;
    before?: string;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (args: {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
  }) => PostPromise;
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput;
    where?: PostWhereInput;
  }) => BatchPayloadPromise;
  upsertPost: (args: {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  }) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  post: (
    where?: PostSubscriptionWhereInput,
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput,
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'body_ASC'
  | 'body_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED';

export type PostWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PostWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<string>;
  title_not?: Maybe<string>;
  title_in?: Maybe<string[] | string>;
  title_not_in?: Maybe<string[] | string>;
  title_lt?: Maybe<string>;
  title_lte?: Maybe<string>;
  title_gt?: Maybe<string>;
  title_gte?: Maybe<string>;
  title_contains?: Maybe<string>;
  title_not_contains?: Maybe<string>;
  title_starts_with?: Maybe<string>;
  title_not_starts_with?: Maybe<string>;
  title_ends_with?: Maybe<string>;
  title_not_ends_with?: Maybe<string>;
  body?: Maybe<string>;
  body_not?: Maybe<string>;
  body_in?: Maybe<string[] | string>;
  body_not_in?: Maybe<string[] | string>;
  body_lt?: Maybe<string>;
  body_lte?: Maybe<string>;
  body_gt?: Maybe<string>;
  body_gte?: Maybe<string>;
  body_contains?: Maybe<string>;
  body_not_contains?: Maybe<string>;
  body_starts_with?: Maybe<string>;
  body_not_starts_with?: Maybe<string>;
  body_ends_with?: Maybe<string>;
  body_not_ends_with?: Maybe<string>;
  author?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<PostWhereInput[] | PostWhereInput>;
  OR?: Maybe<PostWhereInput[] | PostWhereInput>;
  NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<string>;
  email_not?: Maybe<string>;
  email_in?: Maybe<string[] | string>;
  email_not_in?: Maybe<string[] | string>;
  email_lt?: Maybe<string>;
  email_lte?: Maybe<string>;
  email_gt?: Maybe<string>;
  email_gte?: Maybe<string>;
  email_contains?: Maybe<string>;
  email_not_contains?: Maybe<string>;
  email_starts_with?: Maybe<string>;
  email_not_starts_with?: Maybe<string>;
  email_ends_with?: Maybe<string>;
  email_not_ends_with?: Maybe<string>;
  password?: Maybe<string>;
  password_not?: Maybe<string>;
  password_in?: Maybe<string[] | string>;
  password_not_in?: Maybe<string[] | string>;
  password_lt?: Maybe<string>;
  password_lte?: Maybe<string>;
  password_gt?: Maybe<string>;
  password_gte?: Maybe<string>;
  password_contains?: Maybe<string>;
  password_not_contains?: Maybe<string>;
  password_starts_with?: Maybe<string>;
  password_not_starts_with?: Maybe<string>;
  password_ends_with?: Maybe<string>;
  password_not_ends_with?: Maybe<string>;
  post_every?: Maybe<PostWhereInput>;
  post_some?: Maybe<PostWhereInput>;
  post_none?: Maybe<PostWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<string>;
}>;

export interface PostCreateInput {
  id?: Maybe<ID_Input>;
  title: string;
  body?: Maybe<string>;
  author: UserCreateOneWithoutPostInput;
}

export interface UserCreateOneWithoutPostInput {
  create?: Maybe<UserCreateWithoutPostInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutPostInput {
  id?: Maybe<ID_Input>;
  email: string;
  password: string;
}

export interface PostUpdateInput {
  title?: Maybe<string>;
  body?: Maybe<string>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostInput>;
}

export interface UserUpdateOneRequiredWithoutPostInput {
  create?: Maybe<UserCreateWithoutPostInput>;
  update?: Maybe<UserUpdateWithoutPostDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutPostDataInput {
  email?: Maybe<string>;
  password?: Maybe<string>;
}

export interface UserUpsertWithoutPostInput {
  update: UserUpdateWithoutPostDataInput;
  create: UserCreateWithoutPostInput;
}

export interface PostUpdateManyMutationInput {
  title?: Maybe<string>;
  body?: Maybe<string>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: string;
  password: string;
  post?: Maybe<PostCreateManyWithoutAuthorInput>;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}

export interface PostCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  title: string;
  body?: Maybe<string>;
}

export interface UserUpdateInput {
  email?: Maybe<string>;
  password?: Maybe<string>;
  post?: Maybe<PostUpdateManyWithoutAuthorInput>;
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
  delete?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  set?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  disconnect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  update?: Maybe<
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  updateMany?: Maybe<
    PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput
  >;
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export interface PostUpdateWithoutAuthorDataInput {
  title?: Maybe<string>;
  body?: Maybe<string>;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface PostScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<string>;
  title_not?: Maybe<string>;
  title_in?: Maybe<string[] | string>;
  title_not_in?: Maybe<string[] | string>;
  title_lt?: Maybe<string>;
  title_lte?: Maybe<string>;
  title_gt?: Maybe<string>;
  title_gte?: Maybe<string>;
  title_contains?: Maybe<string>;
  title_not_contains?: Maybe<string>;
  title_starts_with?: Maybe<string>;
  title_not_starts_with?: Maybe<string>;
  title_ends_with?: Maybe<string>;
  title_not_ends_with?: Maybe<string>;
  body?: Maybe<string>;
  body_not?: Maybe<string>;
  body_in?: Maybe<string[] | string>;
  body_not_in?: Maybe<string[] | string>;
  body_lt?: Maybe<string>;
  body_lte?: Maybe<string>;
  body_gt?: Maybe<string>;
  body_gte?: Maybe<string>;
  body_contains?: Maybe<string>;
  body_not_contains?: Maybe<string>;
  body_starts_with?: Maybe<string>;
  body_not_starts_with?: Maybe<string>;
  body_ends_with?: Maybe<string>;
  body_not_ends_with?: Maybe<string>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  OR?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  NOT?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
}

export interface PostUpdateManyDataInput {
  title?: Maybe<string>;
  body?: Maybe<string>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<string>;
  password?: Maybe<string>;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<string>;
  updatedFields_contains_every?: Maybe<string[] | string>;
  updatedFields_contains_some?: Maybe<string[] | string>;
  node?: Maybe<PostWhereInput>;
  AND?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  OR?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  NOT?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<string>;
  updatedFields_contains_every?: Maybe<string[] | string>;
  updatedFields_contains_some?: Maybe<string[] | string>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Post {
  id: ID_Output;
  title: string;
  body?: string;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<string>;
  body: () => Promise<string>;
  author: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<string>>;
  body: () => Promise<AsyncIterator<string>>;
  author: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PostNullablePromise
  extends Promise<Post | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<string>;
  body: () => Promise<string>;
  author: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface User {
  id: ID_Output;
  email: string;
  password: string;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<string>;
  password: () => Promise<string>;
  post: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: string;
    before?: string;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<string>>;
  password: () => Promise<AsyncIterator<string>>;
  post: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: string;
    before?: string;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<string>;
  password: () => Promise<string>;
  post: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: string;
    before?: string;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<boolean>;
  hasPreviousPage: () => Promise<boolean>;
  startCursor: () => Promise<string>;
  endCursor: () => Promise<string>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<boolean>>;
  startCursor: () => Promise<AsyncIterator<string>>;
  endCursor: () => Promise<AsyncIterator<string>>;
}

export interface PostEdge {
  node: Post;
  cursor: string;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<string>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<string>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: string;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<string>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<string>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: string[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<string[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<string[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  title: string;
  body?: string;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<string>;
  body: () => Promise<string>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<string>>;
  body: () => Promise<AsyncIterator<string>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: string[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<string[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<string[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: string;
  password: string;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<string>;
  password: () => Promise<string>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<string>>;
  password: () => Promise<AsyncIterator<string>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: 'User',
    embedded: false,
  },
  {
    name: 'Post',
    embedded: false,
  },
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
});
export const prisma = new Prisma();
