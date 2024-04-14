require("dotenv").config();
const axios = require("axios");

const findServiceCenters = async (req, res) => {
  const { postalCode } = req.body;

  const response = await axios.get(
    "https://atapi2.postnord.com/rest/businesslocation/v5/servicepoints/nearest/byaddress",
    {
      params: {
        apikey: process.env.POSTNORD_KEY,
        returnType: "json",
        countryCode: "SE",
        postalCode: postalCode,
      },
    }
  );
  console.log(response);

  res
    .status(200)
    .json(response.data.servicePointInformationResponse.servicePoints);
};

module.exports = { findServiceCenters };
