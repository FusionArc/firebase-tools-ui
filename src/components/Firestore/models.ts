/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { firestore } from 'firebase';

export interface DocumentCollectionDatabaseApi<U, V> {
  projectId: string;
  databaseId: string;

  database: U;

  delete(): Promise<void>;

  getCollections(docRef?: V): Promise<firestore.CollectionReference[]>;
}

export type FirestoreApi = DocumentCollectionDatabaseApi<
  firestore.Firestore,
  firestore.DocumentReference
>;

/** Field types supported by Firestore  */
export enum FieldType {
  ARRAY = 'array',
  BLOB = 'blob',
  BOOLEAN = 'boolean',
  GEOPOINT = 'geopoint',
  JSON = 'json',
  MAP = 'map',
  NULL = 'null',
  NUMBER = 'number',
  REFERENCE = 'reference',
  STRING = 'string',
  TIMESTAMP = 'timestamp',
}

export type FirestoreAny = FirestoreMap | FirestoreArray | FirestorePrimitive;

export type FirestorePrimitive =
  | string
  | number
  | boolean
  | null
  | firestore.DocumentReference
  | firestore.GeoPoint
  | firestore.Blob
  | firestore.Timestamp
  | firestore.FieldValue;

export type FirestoreArray = Array<FirestorePrimitive | FirestoreMap>;

export type FirestoreMap = {
  [field: string]: FirestoreAny;
};
