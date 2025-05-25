// Sample data for the table
const data = [
    { IdReagent: 6994, ReagentCode: 6969, en: "Green Cross Rapid Test", it: "Green Cross Rapid Test", fr: "Green Cross Rapid Test", de: "Green Cross Rapid Test", xx: "Green Cross Rapid Test", LabCode: 0, Disabled: 0 },
    { IdReagent: 6996, ReagentCode: 6972, en: "ELITECH Group Reagents", it: "ELITECH Group Reagents", fr: "ELITECH Group Reagents", de: "ELITECH Group Reagents", xx: "ELITECH Group Reagents", LabCode: 0, Disabled: 0 },
    { IdReagent: 6998, ReagentCode: 6970, en: "VIRION SERION ELISA classic", it: "VIRION SERION ELISA classic", fr: "VIRION SERION ELISA classic", de: "VIRION SERION ELISA classic", xx: "VIRION SERION ELISA classic", LabCode: 0, Disabled: 0 },
    { IdReagent: 6999, ReagentCode: 100008, en: "ROCHE Combur Test", it: "ROCHE Combur Test", fr: "ROCHE Combur Test", de: "ROCHE Combur Test", xx: "ROCHE Combur Test", LabCode: 0, Disabled: 1 },
    { IdReagent: 7000, ReagentCode: 100009, en: "Hoş geldin", it: "HEALGEN", fr: "HEALGEN", de: "HEALGEN", xx: "HEALGEN", LabCode: 0, Disabled: 0 },
    { IdReagent: 7001, ReagentCode: 100010, en: "SIEMENS Multistix", it: "SIEMENS Multistix", fr: "SIEMENS Multistix", de: "SIEMENS Multistix", xx: "SIEMENS Multistix", LabCode: 0, Disabled: 0 },
    { IdReagent: 7002, ReagentCode: 100011, en: "SIEMENS Clinitek", it: "SIEMENS Clinitek", fr: "SIEMENS Clinitek", de: "SIEMENS Clinitek", xx: "SIEMENS Clinitek", LabCode: 0, Disabled: 0 },
    { IdReagent: 7003, ReagentCode: 100012, en: "MINDRAY U-11", it: "MINDRAY U-11", fr: "MINDRAY U-11", de: "MINDRAY U-11", xx: "MINDRAY U-11", LabCode: 0, Disabled: 1 },
    { IdReagent: 7004, ReagentCode: 100013, en: "Cherto", it: "Cherto", fr: "Cherto", de: "Cherto", xx: "Cherto", LabCode: 0, Disabled: 0 },
    { IdReagent: 7015, ReagentCode: 100023, en: "ABBOTT System-Reagent", it: "ABBOTT System-Reagent", fr: "ABBOTT System-Reagent", de: "ABBOTT System-Reagent", xx: "ABBOTT System-Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7016, ReagentCode: 100024, en: "ROCHE System-Reagent", it: "ROCHE System-Reagent", fr: "ROCHE System-Reagent", de: "ROCHE System-Reagent", xx: "ROCHE System-Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7017, ReagentCode: 100025, en: "MINDRAY Reagent", it: "MINDRAY Reagent", fr: "MINDRAY Reagent", de: "MINDRAY Reagent", xx: "MINDRAY Reagent", LabCode: 0, Disabled: 1 },
    { IdReagent: 7019, ReagentCode: 100027, en: "ERBA MANNHEIM System-Reagent", it: "ERBA MANNHEIM System-Reagent", fr: "ERBA MANNHEIM System-Reagent", de: "ERBA MANNHEIM System-Reagent", xx: "ERBA MANNHEIM System-Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7020, ReagentCode: 100028, en: "SIEMENS System-Reagent", it: "SIEMENS System-Reagent", fr: "SIEMENS System-Reagent", de: "SIEMENS System-Reagent", xx: "SIEMENS System-Reagent", LabCode: 0, Disabled: 1 },
    { IdReagent: 7039, ReagentCode: 100041, en: "INSTRUMENTATION LABORATORY System Reagent", it: "INSTRUMENTATION LABORATORY System Reagent", fr: "INSTRUMENTATION LABORATORY System Reagent", de: "INSTRUMENTATION LABORATORY System Reagent", xx: "INSTRUMENTATION LABORATORY System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7040, ReagentCode: 100042, en: "BECKMAN COULTER System Reagent", it: "BECKMAN COULTER System Reagent", fr: "BECKMAN COULTER System Reagent", de: "BECKMAN COULTER System Reagent", xx: "BECKMAN COULTER System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7041, ReagentCode: 100043, en: "DIRUI Urinalysis Strip Reagent", it: "DIRUI Urinalysis Strip Reagent", fr: "DIRUI Urinalysis Strip Reagent", de: "DIRUI Urinalysis Strip Reagent", xx: "DIRUI Urinalysis Strip Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7042, ReagentCode: 6973, en: "BPC BIOSED", it: "BPC BIOSED", fr: "BPC BIOSED", de: "BPC BIOSED", xx: "BPC BIOSED", LabCode: 0, Disabled: 0 },
    { IdReagent: 7045, ReagentCode: 6974, en: "HORIBA System Reagent", it: "HORIBA System Reagent", fr: "HORIBA System Reagent", de: "HORIBA System Reagent", xx: "HORIBA System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7056, ReagentCode: 6975, en: "PKL POKLER System Reagent", it: "PKL POKLER System Reagent", fr: "PKL POKLER System Reagent", de: "PKL POKLER System Reagent", xx: "PKL POKLER System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7082, ReagentCode: 6976, en: "DIASYS System Reagent", it: "DIASYS System Reagent", fr: "DIASYS System Reagent", de: "DIASYS System Reagent", xx: "DIASYS System Reagent", LabCode: 0, Disabled: 1 },
    { IdReagent: 7083, ReagentCode: 6978, en: "BIOMERIEUX Reagent", it: "BIOMERIEUX Reagent", fr: "BIOMERIEUX Reagent", de: "BIOMERIEUX Reagent", xx: "BIOMERIEUX Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7084, ReagentCode: 6977, en: "TOSOH System Reagent", it: "TOSOH System Reagent", fr: "TOSOH System Reagent", de: "TOSOH System Reagent", xx: "TOSOH System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7103, ReagentCode: 6980, en: "WAKO Reagents", it: "WAKO Reagents", fr: "WAKO Reagents", de: "WAKO Reagents", xx: "WAKO Reagents", LabCode: 0, Disabled: 0 },
    { IdReagent: 7105, ReagentCode: 6981, en: "BIORAD System Reagent", it: "BIORAD System Reagent", fr: "BIORAD System Reagent", de: "BIORAD System Reagent", xx: "BIORAD System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7001, ReagentCode: 100110, en: "SIEMENS Multistix 02", it: "SIEMENS Multistix", fr: "SIEMENS Multistix", de: "SIEMENS Multistix", xx: "SIEMENS Multistix", LabCode: 0, Disabled: 0 },
    { IdReagent: 7072, ReagentCode: 100111, en: "SIEMENS Clinitek 03", it: "SIEMENS Clinitek", fr: "SIEMENS Clinitek", de: "SIEMENS Clinitek", xx: "SIEMENS Clinitek", LabCode: 0, Disabled: 0 },
    { IdReagent: 7073, ReagentCode: 100112, en: "MINDRAY U-11 02", it: "MINDRAY U-11", fr: "MINDRAY U-11", de: "MINDRAY U-11", xx: "MINDRAY U-11", LabCode: 0, Disabled: 1 },
    { IdReagent: 7051, ReagentCode: 100110, en: "SIEMENS Multistix 03", it: "SIEMENS Multistix", fr: "SIEMENS Multistix", de: "SIEMENS Multistix", xx: "SIEMENS Multistix", LabCode: 0, Disabled: 0 },
    { IdReagent: 7052, ReagentCode: 100111, en: "SIEMENS Clinitek 02", it: "SIEMENS Clinitek", fr: "SIEMENS Clinitek", de: "SIEMENS Clinitek", xx: "SIEMENS Clinitek", LabCode: 0, Disabled: 0 },
    { IdReagent: 7098, ReagentCode: 100112, en: "MINDRAY U-11 03", it: "MINDRAY U-11", fr: "MINDRAY U-11", de: "MINDRAY U-11", xx: "MINDRAY U-11", LabCode: 0, Disabled: 1 },
];

let currentPage = 1;
let rowsPerPage = 5;
let sortState = { columnIndex: -1, order: 'none' }; // Initial state


// Function to render the table
const tableBodyElement = document.getElementById('tableBody');
if (tableBodyElement) {
    function renderTable(page = 1, dataToRender = data) {
        tableBodyElement.innerHTML = '';

        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const paginatedData = dataToRender.slice(startIndex, endIndex);

        paginatedData.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.ReagentCode}</td>
                <td>${row.en}</td>
                <td>${row.Disabled}</td>
            `;
            tableBodyElement.appendChild(tr);
        });

        renderPagination(dataToRender);
    }


    // Function to render pagination
    function renderPagination(dataWhilePagination) {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const totalPages = Math.ceil(dataWhilePagination.length / rowsPerPage);

        const firstPage = document.createElement('li');
        firstPage.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        firstPage.innerHTML = `<a class="page-link" href="#"><<</a>`;
        firstPage.addEventListener('click', function () {
            goToPage(1, dataWhilePagination);
        });
        pagination.appendChild(firstPage);

        const previousPage = document.createElement('li');
        previousPage.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        previousPage.innerHTML = `<a class="page-link" href="#"><</a>`;
        previousPage.addEventListener('click', function () {
            goToPage(currentPage - 1, dataWhilePagination);
        });
        pagination.appendChild(previousPage);

        // Dynamic page numbers
        const pageNumbersToShow = 3;
        let startPage, endPage;

        if (totalPages <= pageNumbersToShow) {
            // Show all pages if total pages are less than or equal to the pages to show
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 2) {
                // If current page is near the start
                startPage = 1;
                endPage = pageNumbersToShow;
            } else if (currentPage >= totalPages - 1) {
                // If current page is near the end
                startPage = totalPages - (pageNumbersToShow - 1);
                endPage = totalPages;
            } else {
                // Show the current page in the middle
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        // Add pages before dots
        if (startPage > 1) {
            const dots = document.createElement('li');
            dots.className = `page-item disabled`;
            dots.innerHTML = `<span class="page-link">...</span>`;
            pagination.appendChild(dots);
        }

        // Add main page numbers
        for (let i = startPage; i <= endPage; i++) {
            const li = document.createElement('li');
            li.className = `page-item ${i === currentPage ? 'active' : ''}`;
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', function () {
                goToPage(i, dataWhilePagination);
            });
            pagination.appendChild(li);
        }

        // Add pages after dots
        if (endPage < totalPages) {
            const dots = document.createElement('li');
            dots.className = `page-item disabled`;
            dots.innerHTML = `<span class="page-link">...</span>`;
            pagination.appendChild(dots);
        }

        const nextPage = document.createElement('li');
        nextPage.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextPage.innerHTML = `<a class="page-link" href="#">></a>`;
        nextPage.addEventListener('click', function () {
            goToPage(currentPage + 1, dataWhilePagination);
        });
        pagination.appendChild(nextPage);

        const lastPage = document.createElement('li');
        lastPage.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        lastPage.innerHTML = `<a class="page-link" href="#">>></a>`;
        lastPage.addEventListener('click', function () {
            goToPage(totalPages, dataWhilePagination);
        });
        pagination.appendChild(lastPage);
    }

    // Function to handle page change
    function goToPage(page, currentData) {
        currentPage = page;
        renderTable(page, currentData);
    }

    // Initial table render
    renderTable();
}


// Function to handle searching
function searchTable(page) {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filteredData = data.filter(row =>
        row.ReagentCode.toString().includes(searchInput) ||
        row.en.toLowerCase().includes(searchInput)
    );

    renderTable(page, filteredData);
}


// Function to handle sorting
const sortableColoumnElement = document.getElementById("sortableColoumn");
if (sortableColoumnElement) {
    function sortTable(columnIndex, headerElement) {
        let dataToSort = [...data]; // Clone data to avoid modifying the original array
        const columnKeys = ['ReagentCode', 'en', 'Disabled']; // Keys for sorting

        // Reset sorting for all column headers
        document.querySelectorAll('.sortable').forEach((header, index) => {
            if (index !== columnIndex) {
                header.querySelector('.sort-arrow').innerHTML = ''; // Clear arrow for non-sorted columns
            }
        });

        if (sortState.columnIndex === columnIndex) {
            // Toggle sorting order in the sequence: asc -> desc -> none
            if (sortState.order === 'none') {
                sortState.order = 'asc'; // First click: ascending
            } else if (sortState.order === 'asc') {
                sortState.order = 'desc'; // Second click: descending
            } else if (sortState.order === 'desc') {
                sortState.order = 'none'; // Third click: no sorting (reset)
            }
        } else {
            // New column, reset sorting
            sortState.columnIndex = columnIndex;
            sortState.order = 'asc'; // Start with ascending order for a new column
        }

        // Apply sorting
        if (sortState.order === 'asc') {
            dataToSort.sort((a, b) => (a[columnKeys[columnIndex]] > b[columnKeys[columnIndex]]) ? 1 : -1);
            headerElement.querySelector('.sort-arrow').innerHTML = '&#9650;'; // Up arrow for ascending
        } else if (sortState.order === 'desc') {
            dataToSort.sort((a, b) => (a[columnKeys[columnIndex]] < b[columnKeys[columnIndex]]) ? 1 : -1);
            headerElement.querySelector('.sort-arrow').innerHTML = '&#9660;'; // Down arrow for descending
        } else if (sortState.order === 'none') {
            dataToSort = [...data]; // Reset to the original unsorted data
            headerElement.querySelector('.sort-arrow').innerHTML = ''; // No arrow when not sorted
        }

        // If sorting is undone, render the table with the current filtered/unfiltered data
        const currentSearchInput = document.getElementById('searchInput').value.toLowerCase();
        let currentData = dataToSort;
        if (currentSearchInput !== '') {
            currentData = dataToSort.filter(row =>
                row.ReagentCode.toString().includes(currentSearchInput) ||
                row.en.toLowerCase().includes(currentSearchInput)
            );
        }

        renderTable(currentPage, currentSearchInput === '' ? dataToSort : currentData);
    }
}


// Function to show dropdown with suggestions
function showDropdown() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const dropdown = document.getElementById('suggestionsDropdown');

    // Filter the data to find matching items
    const suggestions = data.filter(row =>
        row.ReagentCode.toString().toLowerCase().includes(searchInput) ||
        row.en.toLowerCase().includes(searchInput)
    );

    // Clear previous suggestions
    dropdown.innerHTML = '';

    if (suggestions.length > 0 && searchInput.length > 0) {
        suggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.textContent = `${suggestion.ReagentCode} - ${suggestion.en}`;
            item.onclick = () => selectSuggestion(suggestion);
            dropdown.appendChild(item);
        });
        dropdown.style.display = 'block'; // Show the dropdown
    } else {
        dropdown.style.display = 'none'; // Hide dropdown if no suggestions
    }
}

// Function to handle suggestion selection
function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = `${suggestion.en}`;

    document.getElementById('suggestionsDropdown').style.display = 'none'; // Hide dropdown
    searchTable(1); // Search with the selected suggestion
}


// Event listeners for Data Table page
const searchInputElement = document.getElementById('searchInput');
if (searchInputElement) {
    searchInputElement.addEventListener('input', function () {
        currentPage = 1;
        searchTable(currentPage);
    });
}

const rowsPerPageElement = document.getElementById('rowsPerPage');
if (rowsPerPageElement) {
    rowsPerPageElement.addEventListener('change', function () {
        rowsPerPage = parseInt(this.value);
        currentPage = 1;

        const currentSearchInput = document.getElementById('searchInput').value.toLowerCase();
        if (currentSearchInput != '') {
            searchTable(currentPage);
        }
        else {
            renderTable();
        }
    });
}

const suggestionsDropdownElement = document.getElementById('suggestionsDropdown');
if (suggestionsDropdownElement) {
    document.addEventListener('click', function (event) {
        const dropdown = document.getElementById('suggestionsDropdown');
        const searchInput = document.getElementById('searchInput');
        if (!dropdown.contains(event.target) && !searchInput.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
}


// Function to export table data to CSV
const csvExportButtonElement = document.getElementById('csvExportButton');
if (csvExportButtonElement) {
    function exportToCSV() {
        const rows = Array.from(document.querySelectorAll('#tableBody tr'));
        const csv = rows.map(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            return cells.map(cell => `"${cell.textContent.replace(/"/g, '""')}"`).join(',');
        }).join('\n');

        const csvBlob = new Blob([csv], { type: 'text/csv' });
        const csvUrl = URL.createObjectURL(csvBlob);
        const a = document.createElement('a');
        a.href = csvUrl;
        a.download = 'table_data.csv';
        a.click();
    }
}


// Function to export table data to Excel
const excelExportButtonElement = document.getElementById('excelExportButton');
if (excelExportButtonElement) {
    function exportToExcel() {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.table_to_sheet(document.querySelector('table'));
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'table_data.xlsx');
    }
}


// Function to print the table
const printButtonElement = document.getElementById('printButton');
if (printButtonElement) {
    function printTable() {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Table</title>');
        printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">');
        // Adding custom styles for printing
        printWindow.document.write('<style>');
        printWindow.document.write('body { margin: 20px; }'); // Adjust margins as needed
        printWindow.document.write('table { width: 100%; border-collapse: collapse; }');
        printWindow.document.write('th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }');
        printWindow.document.write('</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(document.querySelector('table').outerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}


// script for Clear Radio Buttons Selection
const clearRadioSelectionElement = document.getElementById('clearRadioSelection');
if (clearRadioSelectionElement) {
    clearRadioSelectionElement.addEventListener('click', function () {
        // Get all radio buttons with name 'radioOptions2'
        const radioButtons = document.getElementsByName('radioOptions2');
        // Loop through radio buttons and uncheck them
        radioButtons.forEach(function (radio) {
            radio.checked = false;
        });
    });
}


// script for JS Enabelled Dropdown
const jsEnabelledDropdownElement = document.getElementById('jsEnabelledDropdown');
if (jsEnabelledDropdownElement) {
    jsEnabelledDropdownElement.addEventListener('change', function () {
        console.log('You selected: ' + this.value);
    });
}

// List of countries
// const countries = [
//     "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
//     "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
//     "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
//     "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
//     "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
//     "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France",
//     "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
//     "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
//     "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
//     "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
//     "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
//     "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal",
//     "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
//     "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
//     "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
//     "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
//     "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
//     "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
//     "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
//     "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
// ];
const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo (Congo-Brazzaville)", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czechia (Czech Republic)", code: "CZ" },
    { name: "Democratic Republic of the Congo", code: "CD" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini (fmr. Swaziland)", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar (formerly Burma)", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Korea", code: "KP" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine State", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Korea", code: "KR" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" },
    { name: "Taiwan", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States of America", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Vatican City", code: "VA" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
];

// script to get the list of countries in simple select dropdown
const countrySingleSelectDropdownElement = document.getElementById('countrySingleSelectDropdown');
if (countrySingleSelectDropdownElement) {
    // Populate the dropdown
    countries.forEach(country => {
        const option = document.createElement('option');
        // option.value = country;
        // option.textContent = country;
        option.value = country.code;
        option.textContent = `${country.name} - ${country.code}`;
        countrySingleSelectDropdownElement.appendChild(option);
    });
}

// script to get the list of countries in multiple select dropdown
const countryMultipleSelectDropdownElement = document.getElementById('countryMultipleSelectDropdown');
if (countryMultipleSelectDropdownElement) {
    const dropdownListElement = document.getElementById('dropdownList');
    const selectedItemsElement = document.getElementById('selectedItems');
    let selectedCountries = [];

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        dropdownListElement.style.display = dropdownListElement.style.display === 'block' ? 'none' : 'block';
    }

    // Function to render the dropdown list
    function renderDropdownList() {
        dropdownListElement.innerHTML = '';
        countries.forEach(country => {
            const item = document.createElement('div');
            item.classList.add('dropdown-list-item');
            item.textContent = `${country.name} - ${country.code}`;
            item.addEventListener('click', () => selectCountry(country));
            dropdownListElement.appendChild(item);
        });
    }

    // Function to render the selected countries
    function renderSelectedItems() {
        selectedItemsElement.innerHTML = '';
        selectedCountries.forEach(country => {
            const item = document.createElement('div');
            item.classList.add('selected-item');
            item.textContent = `${country.name}  - ${country.code}`;
            const removeIcon = document.createElement('span');
            removeIcon.classList.add('remove-item');
            removeIcon.innerHTML = '&times;';
            removeIcon.addEventListener('click', () => removeCountry(country));
            item.appendChild(removeIcon);
            selectedItemsElement.appendChild(item);
        });
    }

    // Function to handle country selection
    function selectCountry(country) {
        if (!selectedCountries.includes(country)) {
            selectedCountries.push(country);
            renderSelectedItems();
        }
        dropdownListElement.style.display = 'none';
    }

    // Function to remove a selected country
    function removeCountry(country) {
        selectedCountries = selectedCountries.filter(c => c !== country);
        renderSelectedItems();
    }

    // Event listener to toggle dropdown on click
    selectedItemsElement.addEventListener('click', toggleDropdown);

    // Initialize the dropdown list
    renderDropdownList();
}

// script for duallistbox element
const availableDuallistElement = document.getElementById('available');
if (availableDuallistElement) {
    // Populate the avaialable section
    countries.forEach(country => {
        const option = document.createElement('option');
        // option.value = country;
        // option.textContent = country;
        option.value = country.code;
        option.textContent = `${country.name} - ${country.code}`;
        availableDuallistElement.appendChild(option);
    });

    document.getElementById('moveRight').addEventListener('click', function () {
        moveItems('available', 'selected');
    });

    document.getElementById('moveLeft').addEventListener('click', function () {
        moveItems('selected', 'available');
    });

    function moveItems(sourceId, destinationId) {
        const source = document.getElementById(sourceId);
        const destination = document.getElementById(destinationId);
        const selectedOptions = Array.from(source.selectedOptions);

        selectedOptions.forEach(option => {
            destination.appendChild(option);
        });
    }
}

// Function to filter listbox options
const searchAvailableElement = document.getElementById('searchAvailable');
if (searchAvailableElement) {
    function filterOptions(searchInputId, listboxId) {
        const searchInput = document.getElementById(searchInputId);
        const filter = searchInput.value.toLowerCase();
        const listbox = document.getElementById(listboxId);
        const options = Array.from(listbox.options);

        options.forEach(option => {
            if (option.text.toLowerCase().includes(filter)) {
                option.style.display = '';
            } else {
                option.style.display = 'none';
            }
        });
    }

    // Add event listeners to the search inputs
    document.getElementById('searchAvailable').addEventListener('input', function () {
        filterOptions('searchAvailable', 'available');
    });

    document.getElementById('searchSelected').addEventListener('input', function () {
        filterOptions('searchSelected', 'selected');
    });
}
