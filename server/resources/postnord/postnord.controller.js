const findServiceCenters = (req, res) => {
  const { postalCode } = req.body;
  console.log(postalCode);
  res.status(200).json("hej");
};

module.exports = { findServiceCenters };
