export const productClicksPerAdvertiser = reports => {
  const advertiserTotals = {};
  reports.forEach(report => {
    const advertiser = report.advertiserSource.name;
    advertiserTotals[advertiser] = advertiserTotals[advertiser]
      ? advertiserTotals[advertiser] + report.clicks
      : report.clicks;
  });
  return Object.keys(advertiserTotals).map(advertiser => ({
    name: advertiser,
    clicks: advertiserTotals[advertiser]
  }));
};
