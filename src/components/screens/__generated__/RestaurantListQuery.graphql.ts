/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RestaurantListQueryVariables = {};
export type RestaurantListQueryResponse = {
    readonly restaurants: ReadonlyArray<{
        readonly id: string | null;
        readonly name: string | null;
        readonly description: string | null;
        readonly imageURL: string | null;
    } | null> | null;
};
export type RestaurantListQuery = {
    readonly response: RestaurantListQueryResponse;
    readonly variables: RestaurantListQueryVariables;
};



/*
query RestaurantListQuery {
  restaurants {
    id
    name
    description
    imageURL
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Restaurant",
    "kind": "LinkedField",
    "name": "restaurants",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageURL",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RestaurantListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RestaurantListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "73f6126bf74ad7372ab740bb49d67444",
    "id": null,
    "metadata": {},
    "name": "RestaurantListQuery",
    "operationKind": "query",
    "text": "query RestaurantListQuery {\n  restaurants {\n    id\n    name\n    description\n    imageURL\n  }\n}\n"
  }
};
})();
(node as any).hash = '5e189050c5c3b240e1e22f0c089ea082';
export default node;
