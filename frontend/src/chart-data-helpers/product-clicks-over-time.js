const keyByDateAndAdvertiser = reports => {
  const groupedByDate = {};
  reports.forEach(report => {
    const day = report.reportDate.substring(0, 10); // YYYY-MM-DD
    const advertiser = report.advertiserSource.name;

    groupedByDate[day] = groupedByDate[day]
      ? { ...groupedByDate[day], [advertiser]: report }
      : { [advertiser]: report };
  });
  return groupedByDate;
};

/**
 * Generate chart data for product clicks over time for each advertiser
 *
 * @param {object[]} advertiserReports
 * @return {object[]}
 */
export const productClicksOverTime = advertiserReports => {
  const grouped = keyByDateAndAdvertiser(advertiserReports);
  const orderedDates = Object.keys(grouped).sort();

  const chartLines = new Set();
  const chartData = orderedDates.map(day => {
    const chartElement = { day };
    const reportsForDate = grouped[day];
    Object.keys(reportsForDate).forEach(advertiser => {
      chartLines.add(advertiser);
      chartElement[advertiser] = reportsForDate[advertiser].clicks;
    });
    return chartElement;
  });

  return {
    chartData,
    chartLines: [...chartLines]
  };
};
