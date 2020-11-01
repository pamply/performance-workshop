/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MenuQueryVariables = {
    restaurantID?: string | null;
};
export type MenuQueryResponse = {
    readonly menu: {
        readonly restaurantID: string | null;
        readonly products: ReadonlyArray<{
            readonly name: string | null;
            readonly description: string | null;
            readonly price: number | null;
            readonly imageURL: string | null;
        } | null> | null;
    } | null;
};
export type MenuQuery = {
    readonly response: MenuQueryResponse;
    readonly variables: MenuQueryVariables;
};



/*
query MenuQuery(
  $restaurantID: ID
) {
  menu(restaurantID: $restaurantID) {
    restaurantID
    products {
      name
      description
      price
      imageURL
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "restaurantID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "restaurantID",
        "variableName": "restaurantID"
      }
    ],
    "concreteType": "Menu",
    "kind": "LinkedField",
    "name": "menu",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "restaurantID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
        "selections": [
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
            "name": "price",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MenuQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MenuQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0b7cab99412a52d9ba0dca477e7f0508",
    "id": null,
    "metadata": {},
    "name": "MenuQuery",
    "operationKind": "query",
    "text": "query MenuQuery(\n  $restaurantID: ID\n) {\n  menu(restaurantID: $restaurantID) {\n    restaurantID\n    products {\n      name\n      description\n      price\n      imageURL\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '23f2ccbaf85886e8750107f790fc62d6';
export default node;
