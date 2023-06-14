const getAllBooks = (req, res) => {
  res.send([
    {id: 1,  name: "dfadfadfdasf", price: 200000 },
    {id: 2,  name: "dgffgafab", price: 120000 },
  ]);
};
module.exports = {
    getAllBooks
}