export type JSONPrimitive = string | number | boolean | null;
export type JSONValue = JSONPrimitive | JSONType | JSONArray;
export type JSONType = { [member: string]: JSONValue };
export interface JSONArray extends Array<JSONValue> {}
