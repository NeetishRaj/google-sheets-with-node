const get_sheets = require("./authorize");

const SPREADSHEET_ID = "1Ga-jjdokaOguy_ySLjJ8SXldQTKWA31QEPRZnGsgnIs";
const SHEET_NAME = "scraped_data";
let sheets;

const create_range = (range) => `${SHEET_NAME}${range ? "!" : ""}${range ? range: ""}`;

const get_sheets_value = async (range) => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: create_range(range),
  });

  return response.data.values;
};

const append_rows = (data, range) => {
  return sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: create_range(range),
    valueInputOption: "RAW",
    resource: {
      values: [data],
    },
  });
};

async function init_sheet_oerations() {
  sheets = await get_sheets();

  /*
  READ FROM GOOGLE SHEET
  */
  const rows = await get_sheets_value(`A1:A5`);
  console.log(rows);

  if (!rows || rows.length === 0) {
    console.log("No data found.");
    return;
  }
  console.log("Name, Major:");
  rows.forEach((row) => {
    // Print columns A and E, which correspond to indices 0 and 4.
    console.log(`${row[0]}, ${row[4]}`);
  });

  /*
  APPEND ROWS TO GOOGLE SHEET
  */
  const data = [1, 2, 3];
  const res2 = await append_rows(data);

  console.log(res2);
}

init_sheet_oerations();
