const getAllCategories = (req, res) => {
  res.send([
    {id: 1,  name: "name1", type: "type1" },
    {id: 2,  name: "name2", type: "type2" },
    {id: 3,  name: "name3", type: "type3" },
  ]);
};
module.exports = {
  getAllCategories,
};
