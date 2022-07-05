const CardTimeSchema = {
  mame: "CardTime",
  properties: {
    _id: "objectId",
    dataStart: "number",
    dataFinish: "number",
    title: "string",
    time: "number",
  },
  primaryKey: "_id",
};

export default CardTimeSchema;
