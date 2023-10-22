const events = {
    'Dec - 22': '★ Leave to Tirupathi',
    'Dec - 23': '★ Touch down TPT in morning may be - Temple',
    'Dec - 24': '★ Explore around Tirupathi',
    'Dec - 25': '★ Should try to return to Hyderabad',
  };
  
  const dateMapping = {
    'Dec - 22': 1,
    'Dec - 23': 2,
    'Dec - 24': 3,
    'Dec - 25': 4,
  };
  
  function handleDateClick(selectedDate) {
    const selectedEventDetails = document.getElementById(`eventDetails-${dateMapping[selectedDate]}`);
  
    const isCurrentlyDisplayed = selectedEventDetails.style.display === 'block';
  
    const eventDetailsList = document.querySelectorAll('.event-details');
    eventDetailsList.forEach(detailsElement => {
      detailsElement.style.display = 'none';
    });
  
    selectedEventDetails.style.display = isCurrentlyDisplayed ? 'none' : 'block';
  
    var toggleIcon = selectedEventDetails.previousElementSibling.querySelector(".toggle-icon");
    if (!isCurrentlyDisplayed) {
      selectedEventDetails.innerHTML = events[selectedDate];
      toggleIcon.style.transform = "rotate(90deg)";
    } else {
      selectedEventDetails.innerHTML = '';
      
      toggleIcon.style.transform = "rotate(0deg)";
    }
  
  
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const daysToTripElement = document.getElementById('daysToTrip');
    const eventPane = document.getElementById('eventPane');
    const closeButton = document.getElementById('closeButtonEvent');
  
    const calculateDaysToTrip = () => {
      const currentDate = new Date();
      const tripDate = new Date('2023-12-22');
      const timeDifference = tripDate - currentDate;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      daysToTripElement.textContent = daysDifference + ' Days to Trip';
    };
  
    daysToTripElement.addEventListener('click', () => {
      eventPane.classList.toggle('show');
      eventPane.style.display = eventPane.classList.contains('show') ? 'block' : 'none';
    });
  
    closeButton.addEventListener('click', () => {
      eventPane.classList.remove('show');
      eventPane.style.display = 'none';
      const eventDetailsList = document.querySelectorAll('.event-details');
    eventDetailsList.forEach(detailsElement => {
      detailsElement.style.display = 'none'; 
    });
    });
  
    calculateDaysToTrip();
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const downloadButtons = document.querySelectorAll(".btn-download");
    const rightPane = document.querySelector(".right-pane");
    const details = document.querySelector(".details");
    const optionLists = document.querySelectorAll(".option-list");
  
    downloadButtons.forEach((button) => {
      button.addEventListener("click", function () {
  
        const option = this.getAttribute("data-option");
        const optionListToShow = document.getElementById(`${option}-options`);
        optionLists.forEach((optionList) => {
          optionList.style.display = "none";
        });
        if (optionListToShow) {
          optionListToShow.style.display = "block";
        }
      });
    });
  });
  
  function showTicketLinks() {
  
    clearRightPane();
  
    var ticketLinks = document.getElementById("ticketLinks");
    var links = [
      { name: "Hyderabad to Tirupathi", url: "https://www.google.com/search?sca_esv=575557852&rlz=1C1RXQR_enIN984IN984&q=Hold+on+meaning&sa=X&ved=2ahUKEwjU8sLUmYmCAxW9S2wGHVSoAtsQ1QJ6BAhDEAE&biw=1280&bih=609&dpr=1.5" },
      { name: "Tirupathi to Hyderabad", url: "https://www.google.com/search?sca_esv=575557852&rlz=1C1RXQR_enIN984IN984&q=Hold+on+meaning&sa=X&ved=2ahUKEwjU8sLUmYmCAxW9S2wGHVSoAtsQ1QJ6BAhDEAE&biw=1280&bih=609&dpr=1.5" },
    ];
  
    var heading = document.createElement("h2");
    heading.textContent = "Ticket Booking Details [Download using below links] :";
    ticketLinks.appendChild(heading);
  
    links.forEach((link) => {
      var anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.name;
      anchor.target = "_blank";
      ticketLinks.appendChild(anchor);
      ticketLinks.appendChild(document.createElement("br"));
    });
  
    var rightPane = document.querySelector(".right-pane");
    rightPane.classList.add("show-details");
  }
  
  
  function showHotelLinks() {
    clearRightPane();
  
    var hotelLinks = document.getElementById("hotelLinks");
  
    var links = [
      { name: "Tirupathi Hotel Booking Details", url: "https://www.google.com/search?sca_esv=575557852&rlz=1C1RXQR_enIN984IN984&q=Hold+on+meaning&sa=X&ved=2ahUKEwjU8sLUmYmCAxW9S2wGHVSoAtsQ1QJ6BAhDEAE&biw=1280&bih=609&dpr=1.5" },
    ];
  
    var heading = document.createElement("h2");
    heading.textContent = "Hotel Booking Details [Download using below links] :";
    hotelLinks.appendChild(heading);
  
    links.forEach((link) => {
      var anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.name;
      anchor.target = "_blank";
      hotelLinks.appendChild(anchor);
      hotelLinks.appendChild(document.createElement("br"));
    });
  
    var rightPane = document.querySelector(".right-pane");
    rightPane.classList.add("show-details");
  }
  
  
  
  function clearRightPane() {
    document.getElementById('dayDropdown').style.display = 'none';
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('json-button').style.display = 'none';
    document.getElementById('participantDropdownContainer').style.display = 'none';
    document.getElementById('pdfPreview').style.display = 'none';
    document.getElementById('checklistContent').style.display = 'none';
  
    document.getElementById('budgetCalculatorContainer').style.display = 'none';
  
    var ticketLinks = document.getElementById("ticketLinks");
    ticketLinks.innerHTML = "";
    ticketLinks.classList.remove("show-details");
  
    var hotelLinks = document.getElementById("hotelLinks");
    hotelLinks.innerHTML = "";
    hotelLinks.classList.remove("show-details");
  
    var itineraryLinks = document.getElementById("itineraryLinks");
    itineraryLinks.innerHTML = "";
    itineraryLinks.classList.remove("show-details");
  
    var dayDropdown = document.getElementById("dayDropdown");
    dayDropdown.innerHTML = "";
    dayDropdown.classList.remove("show-details");
  
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    tableContainer.classList.remove("show-details");
  
    var addExpenseFormContainer = document.getElementById("addExpenseFormContainer");
    addExpenseFormContainer.classList.remove("show-details");
    document.getElementById('addExpenseFormContainer').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('expensesContainer').style.display = 'none';
  
    var expensesContainer = document.getElementById("expenseStatisticsContainer");
    expensesContainer.classList.remove("show-details");
  
    document.getElementById('expenseStatisticsContainer').style.display = 'none';
  
    document.getElementById('videoPlayer').style.display = 'none';
  
    const checklistContent = document.getElementById('checklistContent');
    checklistContent.innerHTML = ''; 
  
  }
  
  function showDayWisePlan() {
    clearRightPane();
    const dayDropdown = document.getElementById("dayDropdown");
  
    dayDropdown.innerHTML = ""; 
    document.getElementById('dayDropdown').style.display = 'block';
    document.getElementById('tableContainer').style.display = 'block';
  
    const option1 = document.createElement("option");
    option1.value = "Day-1 [Gather in Hyd]";
    option1.textContent = "Day-1 [Gather in Hyd]";
    dayDropdown.appendChild(option1);
    const option2 = document.createElement("option");
    option2.value = "Day-2 [Tirupathi]";
    option2.textContent = "Day-2 [Tirupathi]";
    dayDropdown.appendChild(option2);
    const option3 = document.createElement("option");
    option3.value = "Day-3 [Tirupathi]";
    option3.textContent = "Day-3 [Tirupathi]";
    dayDropdown.appendChild(option3);
    const option4 = document.createElement("option");
    option4.value = "Day-4 [Return to Hyd]";
    option4.textContent = "Day-4 [Return to Hyd]";
    dayDropdown.appendChild(option4);
    console.log('selected option is ', document.getElementById("dayDropdown").value);
  
    dayDropdown.addEventListener("change", () => {
      const jsonData = getJsonData();
      const filteredData = jsonData.filter(whichDay);
      updateTable(filteredData);
    });
  
    const jsonData = getJsonData();
    const filteredData = jsonData.filter(whichDay);
    updateTable(filteredData);
  }
  
  function whichDay(item) {
    console.log('Which day is selected:: ', document.getElementById("dayDropdown").value);
    return item.dayNumber === document.getElementById("dayDropdown").value;
  }
  
  function updateTable(filteredData) {
    const selectedDay = document.getElementById("dayDropdown").value;
    let tableHTML = `<h2>${selectedDay}`;
  
    if (selectedDay.includes("Day-1")) {
      tableHTML += " - Dec 22";
    } else if (selectedDay.includes("Day-2")) {
      tableHTML += " - Dec 23";
    } else if (selectedDay.includes("Day-3")) {
      tableHTML += " - Dec 24";
    } else if (selectedDay.includes("Day-4")) {
      tableHTML += " - Dec 25";
    } 
  
    tableHTML += "</h2>";
  
    tableHTML += '<table>';
    tableHTML += '<thead><tr><th>Time</th><th>Visiting Place</th><th>Description</th></tr></thead>';
    tableHTML += '<tbody>';
  
    filteredData.forEach((item) => {
      tableHTML += '<tr>';
      tableHTML += `<td>${item.time}</td>`;
      tableHTML += `<td>${item.visitingPlace}</td>`;
      tableHTML += `<td>${item.description}</td>`;
      tableHTML += '</tr>';
    });
    document.getElementById('tableContainer').style.display = 'block';
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = tableHTML;
  }
  
  function getJsonData() {
    const jsonData = [
        {
            "dayNumber": "Day-1 [Gather in Hyd]",
            "baseLocation": "Hyderabad",
            "time": "NA - Will be updated after ticket bookings",
            "visitingPlace": "NA",
            "description": "NA",
            "status": "Yet to Visit"
          },
          {
            "dayNumber": "Day-1 [Gather in Hyd]",
            "baseLocation": "Hyderabad",
            "time": "NA -  TBU",
            "visitingPlace": "Bus/Train Station :)",
            "description": "Board the Train/Bus",
            "status": "Yet to Visit"
          },
          {
            "dayNumber": "Day-2 [Tirupathi]",
            "baseLocation": "Tirupathi",
            "time": "TBU",
            "visitingPlace": "Temple",
            "description": "Darshanam and TBD",
            "status": "Yet to Visit"
          },
          {
            "dayNumber": "Day-2 [Tirupathi]",
            "baseLocation": "Tirupathi",
            "time": "TBU",
            "visitingPlace": "TBD",
            "description": "In and around Tirupathi",
            "status": "Yet to Visit"
          },
          {
            "dayNumber": "Day-3 [Tirupathi]",
            "baseLocation": "Tirupathi",
            "time": "TBU",
            "visitingPlace": "Temple",
            "description": "TBU",
            "status": "Yet to Visit"
          },
          {
            "dayNumber": "Day-3 [Tirupathi]",
            "baseLocation": "Tirupathi",
            "time": "TBU",
            "visitingPlace": "Dam",
            "description": "TBD",
            "status": "Yet to Visit"
          },
          {
            "dayNumber": "Day-4 [Return to Hyd]",
            "baseLocation": "Away from Tirupathi",
            "time": "NA",
            "visitingPlace": "TBD",
            "description": "NA",
            "status": "Yet to Visit"
          }
  
    ];
    return jsonData;
  }
  
  var localExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
  
  function showExpenses() {
    clearRightPane();
    var addExpenseFormContainer = document.getElementById("addExpenseFormContainer");
    document.getElementById('addExpenseFormContainer').style.display = 'block';
    addExpenseFormContainer.classList.add("show-details");
  }
  
  
  function submitExpense(event) {
    event.preventDefault();
    clearRightPane();
    var name = document.getElementById("expenseName").value;
    var amount = document.getElementById("expenseAmount").value;
    var description = document.getElementById("expenseDescription").value;
    var clearingCheck = document.getElementById("addClearingCheckbox").checked;
    var clearingFrom = document.getElementById("expenseFrom").value;
    var clearingTo = document.getElementById("expenseClearingTo").value;
  
    if (name && amount && description) {
      amount = parseFloat(amount);
  
      const timestampIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
      var expense = {
        name: name,
        amount: amount,
        description: description,
        timestamp: timestampIST,
        clearingCheck : clearingCheck,
        clearingFrom: clearingFrom,
        clearingTo: clearingTo
      };

      console.log('this will be pushed to API ::',JSON.stringify(expense));
      fetch('https://script.google.com/macros/s/AKfycbxEsW4IG-K3xInHdKb2RG-4pBb8wcdnCA8Z49Asy596Ignrqy0w7RB6NZa4mfG5QKz-/exec', {
        method: 'POST',
        mode:'no-cors',
        credentials:'omit',
        redirect:'follow',
        referrerPolicy:'no-referrer',
        body: JSON.stringify(expense),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.text())
      .then(data => {
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  
      document.getElementById("expenseName").value = "";
      document.getElementById("expenseAmount").value = "";
      document.getElementById("expenseDescription").value = "";
  
      document.getElementById('result').style.display = 'block';
      document.getElementById("result").textContent = "Expense added successfully.";
  
      showExpenseStatistics();
    } else {
      document.getElementById('result').style.display = 'block';
      document.getElementById("result").textContent = "!!! Expense not added. Please fill out all the fields.";
    }
  }
  
  
  const addClearingCheckbox = document.getElementById("addClearingCheckbox");
  const expenseFromDropdown = document.getElementById("expenseFrom");
  const expenseClearingToDropdown = document.getElementById("expenseClearingTo");
  
  addClearingCheckbox.addEventListener("change", function () {
    if (addClearingCheckbox.checked) {
      openPopup();
      expenseClearingToDropdown.disabled = false;
    } else {
      expenseFromDropdown.disabled = true;
      expenseClearingToDropdown.disabled = true;
    }
  });
  
  function openPopup() {
    var jsonPopup = document.getElementById("jsonPopup2");
    var jsonTextArea = document.getElementById("jsonTextArea2");
    jsonTextArea.value = "Only select this if you are clearing the amount to someone [They paid on behalf of you]";
    jsonPopup.style.display = "block";
  }
  
  function closePopup2() {
    var jsonPopup = document.getElementById("jsonPopup2");
    jsonPopup.style.display = "none";
  }
  
  
  function checkFromAndClearing() {
    var expenseFrom = document.getElementById("expenseFrom").value;
    var expenseClearingTo = document.getElementById("expenseClearingTo").value;
    var submitButton = document.getElementById("submitButton");
  
    if (expenseFrom === expenseClearingTo) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }
  const apiUrl = 'https://script.google.com/macros/s/AKfycbxEsW4IG-K3xInHdKb2RG-4pBb8wcdnCA8Z49Asy596Ignrqy0w7RB6NZa4mfG5QKz-/exec';
 
  const cacheKey = 'cachedExpenses';
  
  
  let currentPage = 1;
  const itemsPerPage = 10;
  
  async function showExpensesTable() {
    clearRightPane();
    document.getElementById('expensesContainer').style.display = 'block';
    document.getElementById('json-button').style.display = 'block';
    var expensesList = document.getElementById("expensesList");
    expensesList.innerHTML = '<div class="loading" id="loading"><p>Fetching Real-time data from API...</p></div>';
  
    try {
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        paginateAndDisplayExpenses(parsedData);
      }
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
  
      localStorage.setItem(cacheKey, JSON.stringify(data));
  
      paginateAndDisplayExpenses(data);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
  
  function calculateTotalSum(data) {
    let totalSum = 0;
    
    for (let i = 0; i < data.data.length; i++) {
      const expense = data.data[i];
      if (!expense.clearingCheck) {
        totalSum += expense.amount;
      }
    }
    
    return totalSum;
  }
  
  
  function paginateAndDisplayExpenses(data) {
    const totalSum = calculateTotalSum(data);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    console.log('Getting expenses from API...');
    var tableHTML = '<table>';
    tableHTML += '<thead><tr><th>Name</th><th>Amount</th><th>Description</th><th>Timestamp</th><th>Relative</th></tr></thead>';
    tableHTML += '<tbody>';
  
    for (let i = startIndex; i < endIndex && i < data.data.length; i++) {
      const expense = data.data[i];
      tableHTML += '<tr>';
      tableHTML += `<td>${expense.name}</td>`;
      tableHTML += `<td>${expense.amount}</td>`;
      tableHTML += `<td>${expense.description}</td>`;
      tableHTML += `<td>${expense.timestamp}</td>`;
      const clearingContent = expense.clearingCheck
        ? `Cleared to ${expense.clearingTo}`
        : 'NA';
      tableHTML += `<td>${clearingContent}</td>`;
      tableHTML += '</tr>';
    }
  
    tableHTML += '</tbody></table>';
    expensesList.innerHTML = tableHTML;
  
    var totalSumElement = document.createElement('p');
    totalSumElement.className = 'total-sum';
    totalSumElement.innerText = `Total Expenditure : Rs.${totalSum}.00/-`;
    expensesList.appendChild(totalSumElement);
  
    if (data.data.length > itemsPerPage) {
      addPaginationControls(data.data.length);
    } else {
      clearPaginationControls();
    }
  }
  
  function addPaginationControls(totalItems) {
    clearPaginationControls();
  
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    var paginationHTML = '<div class="pagination-container">';
    paginationHTML += '<div class="pagination">';
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="pagination-button" onclick="changePage(${i})">${i}</button>`;
    }
    paginationHTML += '</div>';
    paginationHTML += '</div>';
  
    var expensesContainer = document.getElementById('expensesContainer');
    expensesContainer.innerHTML += paginationHTML;
  }
  
  function clearPaginationControls() {
    var paginationContainer = document.querySelector('.pagination-container');
    if (paginationContainer) {
      paginationContainer.remove();
    }
  }
  
  function changePage(page) {
    currentPage = page;
    showExpensesTable();
  }
  
  
  async function openPopupWithLocalStorage() {
    var jsonPopup = document.getElementById("jsonPopup");
    var jsonTextArea = document.getElementById("jsonTextArea");
    jsonTextArea.value = "Loading.......";
    jsonPopup.style.display = "block";
  
  
    try {
      var allExpenses = await getCombinedExpenses();
      jsonTextArea.value = JSON.stringify(allExpenses, null, 2);
      jsonPopup.style.display = "block";
  
    } catch (error) {
      console.error('Error getting combined expenses:', error);
    }
  }
  
  async function getCombinedExpenses() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      const apiExpenses = await response.json();
      return apiExpenses.data;
    } catch (error) {
      console.error('Error retrieving data:', error);
      throw error; 
    }
  }
  
  
  
  
  function copyToClipboard() {
    var jsonTextArea = document.getElementById("jsonTextArea");
    jsonTextArea.select();
    document.execCommand("copy");
  }
  
  function closePopup() {
    var jsonPopup = document.getElementById("jsonPopup");
    jsonPopup.style.display = "none";
  }
  
  
  var expenseChart;
  
  
  function showExpenseStatistics() {
    clearRightPane();
    var expensesContainer = document.getElementById("expenseStatisticsContainer");
    document.getElementById('expenseStatisticsContainer').style.display = 'block';
    expensesContainer.classList.add("show-details");
  
    var loadingDiv = document.getElementById('graphLoading');
    loadingDiv.style.display = 'block';
  
  
    const apiUrl = 'https://script.google.com/macros/s/AKfycbzbz277uf3AAjNd_S9FjPVjl3z5Xqxlu-R3sIBK_1QD6xmo8UL5QxMBmmEqRUk-Tpn6/exec';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(expenses => {
        var groupedExpenses = {};
        var clearingCalculations = {};
  
        expenses.data.forEach((expense) => {
          if (groupedExpenses.hasOwnProperty(expense.name)) {
            groupedExpenses[expense.name] += expense.amount;
          } else {
            groupedExpenses[expense.name] = expense.amount;
          }
  
          if (expense.clearingCheck) {
            if (!clearingCalculations[expense.clearingTo]) {
              clearingCalculations[expense.clearingTo] = 0;
            }
            if (!clearingCalculations[expense.clearingFrom]) {
              clearingCalculations[expense.clearingFrom] = 0;
            }
            clearingCalculations[expense.clearingTo] -= expense.amount;
          }
        });
  
        Object.keys(clearingCalculations).forEach((name) => {
          groupedExpenses[name] += clearingCalculations[name];
        });
  
        var names = Object.keys(groupedExpenses);
        var amounts = Object.values(groupedExpenses);
  
        loadingDiv.style.display = 'none';
        if (expenseChart) {
          expenseChart.destroy();
        }
        loadingDiv.style.display = 'none';
  
        var ctx = document.getElementById("expenseChart").getContext("2d");
        expenseChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: names,
            datasets: [
              {
                label: "Total Expense",
                data: amounts,
                backgroundColor: createGradient(ctx, "#2c3e50", "#34495e"),
                borderWidth: 1,
                borderRadius: 8,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false, 
              },
            },
          },
        });
      })
      .catch((error) => {
        console.error('Error retrieving data:', error);
      });
  }
  
  function createGradient(context, colorStart, colorEnd) {
    var gradient = context.createLinearGradient(0, 0, 0, context.canvas.height);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  }
  
  const sendBotMessageBtn = document.getElementById('sendBotMessageBtn');
  sendBotMessageBtn.addEventListener('click', handleBotMessage);
  
  function handleBotMessage() {
    const userInput = document.getElementById('botMessage').value;
    appendUserMessage(userInput);
    generateBotResponse(userInput);
  }
  
  
  function generateBotResponse(userInput) {
    const inputText = userInput.toLowerCase();
    let response = "I'm sorry, I didn't understand that.";
    if (inputText === 'hi' || inputText === 'hello') {
      response = "Hi there! What would you like to know about the trip?";
      appendBotMessage(response);
      showBotOptions();
    } else if (inputText === 'when does the trip start?' || (userInput.includes('start') && userInput.includes('date'))) {
      response = "The trip starts on December 22nd. Gather around in Hyderabad";
      appendBotMessage(response);
    } else if (inputText === 'when does the trip end?' || (userInput.includes('end') && userInput.includes('date'))) {
      response = "The trip ends on December 25th.<br> Dont worry you have an holiday that day";
      appendBotMessage(response);
    } else if (inputText === 'tell me about tirupathi' || (userInput.includes('about') && userInput.includes('araku'))) {
      response = "Tirupathi, located in Andhra Pradesh, is renowned for its world-famous Venkateswara Temple, dedicated to Lord Venkateswara. This sacred temple atop the Tirumala Hills attracts millions of pilgrims annually, making it one of the wealthiest and most visited religious sites in the world.";
      appendBotMessage(response);
    }   else if (inputText === 'how many pair of clothes should i carry?' || userInput.includes('clothes')) {
      response = "It is recommended to carry only 4 pairs with 1 night wear and a sweater/thermal.";
      appendBotMessage(response);
    } else if (inputText === 'give me train number to track on whereismytrain app?' || userInput.includes('train app')) {
      response = `
        <table>
            <tr>
                <th>Boarding at</th>
                <th>Train Number</th>
                <th>Train Name</th>
                <th>Departure Station</th>
            </tr>
            <tr>
                <td>Secunderabad[SEC-JN]</td>
                <td>****</td>
                <td>****</td>
                <td>Tirupathi[TPT]</td>
            </tr>
            <tr>
                <td>TBU</td>
                <td>TBU</td>
                <td>TBU</td>
                <td>TBU</td>
            </tr>
            <tr>
            <td>TBU</td>
            <td>TBU</td>
            <td>TBU</td>
            <td>TBU</td>
            </tr>
        </table>`;
      appendBotMessage(response);
    }
    else {
      appendBotMessage(response);
    }
  }
  
  
  
  function appendUserMessage(message) {
    const chatDiv = document.getElementById('chat');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('user');
    messageDiv.textContent = message;
    chatDiv.appendChild(messageDiv);
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }
  
  
  
  function activateBot() {
    clearRightPane();
    document.getElementById('chat-container').style.display = 'block';
    const chatBox = document.getElementById('chatBox');
    chatBox.classList.remove('hidden-links');
    appendBotMessage("Hi there! What would you like to know about the trip?");
    showBotOptions();
  }
  
  function showBotOptions() {
    const options = [
      "When does the trip start?",
      "When does the trip end?",
      "How many pair of clothes should I carry?",
      "Give me train number to track on WhereIsMyTrain App?",
      "Tell me about Tirupathi",
      "Should I carry warm clothes?"
    ];
  
    const optionsHTML = options.map(option => `<button class="option" onclick="fillInput('${option}')">${option}</button>`).join('  ');
    appendBotMessage(optionsHTML);
  }
  
  function fillInput(text) {
    document.getElementById('botMessage').value = text;
  }
  
  function appendBotMessage(message) {
    const chatDiv = document.getElementById('chat');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('bot');
    messageDiv.innerHTML = message;
    chatDiv.appendChild(messageDiv);
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }
  
  function clearLocalStorage() {
    localStorage.clear();
    console.log('LocalStorage has been cleared.');
  }
  
  const participantDropdown = document.getElementById('participantDropdown');
  const pdfPreview = document.getElementById('pdfPreview');
  
  participantDropdown.addEventListener('change', generateAndShowExpenseReport);
  
  async function generateAndShowExpenseReport() {
    clearRightPane();
    document.getElementById('participantDropdownContainer').style.display = 'flex';
    document.getElementById('pdfPreview').style.display = 'block';
    const selectedParticipant = participantDropdown.value;
  
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    console.log(jsonData);
  
    const filteredData = jsonData.data.filter(item => item.name === selectedParticipant);
    const totalDebit = filteredData.reduce((total, item) => total + item.amount, 0);
    const filteredDataCr = jsonData.data.filter(item => ((item.clearingTo === selectedParticipant) && item.clearingCheck));
    const totalCredit = filteredDataCr.reduce((total, item) => total + item.amount, 0);
    const netSpent = totalDebit - totalCredit;
  
    const pdfDefinition = {
      content: [
        { text: 'Expense Report: Tirupathi Trip\n\n', style: 'header' },
        {
          text: `Dear ${selectedParticipant},\n
        We hope this message finds you well. And wishing that you are enjoying the trip to Tirupathi, we would like to provide you with an overview of the expenses incurred during the journey. Your participation contributed to a memorable experience, and we appreciate your involvement.
  
  The total amounts you contributed till now for various expenses during the trip have been recorded. These include charges for transportation, accommodation, food, activities, and other shared costs. Each expense has been accompanied by a description to provide transparency and clarity on why the amount was paid. The expenses were tracked along with timestamps, capturing the date and time of each transaction.
        `, style: 'paragraph'
        },
        { text: 'Amounts Paid: [DEBIT-DR]', style: 'subheader2' },
        {
          table: {
            widths: [100, '*', 60],
            body: [
              ['Date', 'Description', 'Amount'],
              ...filteredData.map(item => [item.timestamp, item.description, item.amount]),
            ],
          },
          style: 'tableStyle'
        },
  
        { text: '\nAmounts Received: [CREDIT-CR]', style: 'subheader2' },
        {
          table: {
            widths: [100, '*', 60],
            body: [
              ['Date', 'Received From', 'Amount'],
              ...filteredDataCr.map(item => [item.timestamp, item.clearingFrom, item.amount]),
            ],
          },
          style: 'tableStyle'
        },
  
  
        { text: `Total Debit  : ${totalDebit}`, style: 'subheader2' },
        { text: `Total Credit  : ${totalCredit}`, style: 'subheader2' },
        { text: `Net Spending  : ${netSpent}`, style: 'subheader2' },
  
        {
          text: `
        We want to express our gratitude for your contributions, which played a crucial role in making the trip enjoyable and successful till now. Your participation helped create lasting memories for all of us.
  
        In the spirit of fairness and transparency, we will be meticulously dividing and balancing the expenses incurred by each participant. Our goal is to ensure that everyone's contributions are fairly distributed, reflecting each individual's share of the overall expenses.
        
        If your debits exceed your credits, we sincerely thank you for your generosity and willingness to contribute beyond the minimum. Your commitment to making the trip enjoyable for all participants is truly appreciated.
        
        Please rest assured that our intention is to handle the expense distribution fairly, so that each participant's financial involvement is balanced, and everyone's experience is equally valued.
        
        Once again, we extend our heartfelt appreciation for your participation. If you have any questions or would like further information regarding the expense report, please feel free to reach out to us.
        
        Thank you and looking forward to more memorable journeys in the future.
        
  Best regards,
  Khaja Pasha.
  
        `, style: 'paragraph'
        },
      ],
      styles: {
        header: { fontSize: 16, bold: true, margin: [0, 0, 0, 10] },
        paragraph: { fontSize: 12, lineHeight: 1.5 },
        subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
        subheader2: { fontSize: 12, bold: true, margin: [0, 5, 0, 5] },
        tableStyle: { margin: [0, 10, 0, 10] },
      },
      filename: `${selectedParticipant}-${new Date().toISOString().split('T')[0]}.pdf`
    };
  
    pdfMake.createPdf(pdfDefinition).getDataUrl((dataUrl) => {
      pdfPreview.innerHTML = `<iframe src="${dataUrl}" width="100%" height="600px"></iframe>`;
    });
  }
  
  
  const budgetCalculatorForm = document.getElementById('budgetCalculatorForm');
  
  function activateForm() {
    clearRightPane();
    document.getElementById('budgetCalculatorContainer').style.display = 'block';
  }
  
  
  
  const transportationDropdown = document.getElementById('transportation');
  const classDropdown = document.getElementById('class');
  const classDropdownContainer = document.getElementById('classDropdownContainer');
  
  transportationDropdown.addEventListener('change', updateClassDropdown);
  
  function updateClassDropdown() {
    document.getElementById('budgetCalculatorForm').style.display = 'block';
    const selectedTransportation = transportationDropdown.value;
    classDropdown.innerHTML = '';
  
    if (selectedTransportation === 'airTravel') {
      const airTravelClasses = ['Business class', 'Economy', 'First Class'];
      for (const className of airTravelClasses) {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className;
        classDropdown.appendChild(option);
      }
      classDropdownContainer.style.display = 'block';
    } else if (selectedTransportation === 'train') {
      const trainClasses = ['Gen', 'Sleeper', '3AC', '2AC', '1AC'];
      for (const className of trainClasses) {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className;
        classDropdown.appendChild(option);
      }
      classDropdownContainer.style.display = 'block';
    } else if (selectedTransportation === 'bus') {
      const busClasses = ['Sleeper AC', 'Sleeper Non-AC', 'Seater AC', 'Seater Non-AC'];
      for (const className of busClasses) {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className;
        classDropdown.appendChild(option);
      }
      classDropdownContainer.style.display = 'block';
    } else {
      classDropdownContainer.style.display = 'none';
    }
  }
  
  updateClassDropdown();
  
  const calculateBudgetButton = document.getElementById('calculateBudgetButton');
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close');
  const getEstimationSlipInModal = document.getElementById('getEstimationSlipInModal');
  
  calculateBudgetButton.addEventListener('click', (event) => {
    event.preventDefault();
    calculateAndDisplayBudget();
  });
  
  calculateBudgetButton.addEventListener('click', openModal);
  
  closeBtn.addEventListener('click', closeModal);
  
  getEstimationSlipInModal.addEventListener('click', generateEstimationSlip);
  
  function openModal() {
    modal.style.display = 'block';
  }
  
  function closeModal() {
    modal.style.display = 'none';
  }
  
  function calculateAndDisplayBudget() {
    let duration = parseFloat(document.getElementById('duration').value);
    let nightsStay = parseFloat(document.getElementById('nightsStay').value);
    let noOfAdults = parseInt(document.getElementById('noOfAdults').value);
  
    if (isNaN(duration) || duration <= 0) {
      duration = 0; 
    }
  
    if (isNaN(nightsStay) || nightsStay <= 0) {
      nightsStay = 0; 
    }
  
    if (isNaN(noOfAdults) || noOfAdults <= 0) {
      noOfAdults = 0; 
    }
  
    const accommodationRadios = document.getElementsByName('accommodation');
    let selectedAccommodation = '';
    for (const radio of accommodationRadios) {
      if (radio.checked) {
        selectedAccommodation = radio.value;
        break;
      }
    }
  
  
    const transportationSelect = document.getElementById('transportation').value;
    const classSelect = document.getElementById('class').value;
    
    const allSightSeeingValue = document.querySelector('input[name="sightseeing"]:checked').value;
  
    const localTransportSelect = document.getElementById('localTransport').value;
  
    let shoppingSpend = parseInt(document.getElementById('shopping').value);
    const totalCost = calculateTotalCost(duration, nightsStay, noOfAdults,
      selectedAccommodation, transportationSelect, classSelect,
      allSightSeeingValue, localTransportSelect, shoppingSpend);
  
    const estimatedBudget = document.getElementById('estimatedBudget');
    estimatedBudget.textContent = 'Estimated Budget: Rs. ' + totalCost;
  
    openModal();
  }
  
  let allRoundCost = 0;
  
  function calculateTotalCost(duration, nightsStay, noOfAdults,
    selectedAccommodation, selectedTransportation, selectedClass,
    isAllSightSeeing, localTransportSelect, shoppingSpend) {
    console.log(selectedAccommodation);
    let costPerNightPerAdult = 0;
    if (selectedAccommodation.includes('budget')) {
      costPerNightPerAdult = 500;
      console.log(costPerNightPerAdult);
    } else if (selectedAccommodation.includes('mid')) {
      costPerNightPerAdult = 615;
      console.log(costPerNightPerAdult);
    } else if (selectedAccommodation.includes('luxury')) {
      costPerNightPerAdult = 1200;
      console.log(costPerNightPerAdult);
    }
  
    let transportationCost = 0;
    let classCost = 0;
  
    if (selectedTransportation === 'airTravel') {
      if (selectedClass === 'Business class') {
        classCost = 10000;
      } else if (selectedClass === 'Economy') {
        classCost = 3500; 
      } else if (selectedClass === 'First Class') {
        classCost = 15000; 
      }
    } else if (selectedTransportation === 'train') {
      if (selectedClass === 'Gen') {
        classCost = 500; 
      } else if (selectedClass === 'Sleeper') {
        classCost = 1000; 
      } else if (selectedClass === '3AC') {
        classCost = 1500; 
      } else if (selectedClass === '2AC') {
        classCost = 2500; 
      } else if (selectedClass === '1AC') {
        classCost = 4000; 
      }
    } else if(selectedTransportation === 'bus'){
      if (selectedClass === 'Sleeper Non-AC') {
        classCost = 1100; 
      } else if (selectedClass === 'Sleeper AC') {
        classCost = 1390; 
      } else if (selectedClass === 'Seater AC') {
        classCost = 1000; 
      } else if (selectedClass === 'Seater Non-AC') {
        classCost = 700; 
      }  
    }else if(selectedTransportation === 'car'){
      classCost = duration * 2500; 
    }
    transportationCost = noOfAdults * classCost;
  
    let someSightSeeing = 400;
  
    if (isAllSightSeeing == 'yes') {
      someSightSeeing = 700;
    }
  
    let localTransportCost = 0;
    console.log('Local trans select :: ', localTransportSelect);
    if (localTransportSelect == 'taxis') {
      localTransportCost = 1600;
    } else {
      localTransportCost = 400;
    }
  
    const totalCost = (nightsStay * (costPerNightPerAdult * noOfAdults)) +
      transportationCost +
      (noOfAdults * someSightSeeing) + (noOfAdults * localTransportCost) + shoppingSpend;
    allRoundCost = totalCost;
    return totalCost;
  }
  
  function generateEstimationSlip() {
    const destination = document.getElementById('destination').value;
    const duration = document.getElementById('duration').value;
    const nightsStay = document.getElementById('nightsStay').value;
    const noOfAdults = document.getElementById('noOfAdults').value;
    const accommodationRadios = document.getElementsByName('accommodation');
  
    let selectedAccommodation = '';
    for (const radio of accommodationRadios) {
      if (radio.checked) {
        selectedAccommodation = radio.value;
        break;
      }
    }
    const transportationSelect = document.getElementById('transportation').value;
    const classSelect = document.getElementById('class').value;
  
  
    const allSightSeeingValue = document.querySelector('input[name="sightseeing"]:checked').value;
  
    const localTransportSelect = document.getElementById('localTransport').value;
  
    const shoppingSpend = parseInt(document.getElementById('shopping').value);
  
    const pdfContent = [
      { text: 'Estimation Slip', style: 'header' },
  
      {
        table: {
          widths: ['70%', '30%'],
          body: [
            ['Selection', 'Given Value'],
            ['Destination', `${destination}`],
            ['Duration (Days)', `${duration}`],
            ['Number of Nights of Stay (*Usually this should be Duration Days - 1 Day)', `${nightsStay}`],
            ['Number of Adults', `${noOfAdults}`],
            ['Accommodation', `${selectedAccommodation}`],
            ['Mode of Transportation', `${transportationSelect}`],
            ['Selected Class', `${classSelect}`],
            ['Sightseeing as in Day Wise Plan', `${allSightSeeingValue}`],
            ['Transport within Destination', `${localTransportSelect}`],
            ['Shopping Estimation (INR)', `${shoppingSpend}`],
            ['Total', `Rs. ${allRoundCost}/-`],
          ],
        },
        style: 'tableStyle'
      },
  
      {
        text: [
          '\n\nPlease note that this estimation is provided ',
          'based on the information you provided. Actual expenses may vary due to factors such as ',
          'fluctuating prices, unforeseen circumstances, and individual preferences. We recommend ',
          'using this estimation as a guideline and planning accordingly to ensure a memorable and ',
          'enjoyable travel experience.\n\n'
        ],
        style: 'professionalNote'
      },
    ];
  
    const styles = {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      tableStyle: {
        margin: [0, 10, 0, 10]
      },
      note: {
        fontSize: 10,
        italics: true,
        alignment: 'center',
        margin: [0, 10, 0, 10]
      },
      professionalNote: {
        fontSize: 12,
        lineHeight: 1.3,
        margin: [0, 10, 0, 0],
        color: '#555',
        alignment: 'left'
      }
    };
  
    const pdfDefinition = {
      content: pdfContent,
      styles: styles,
    };
  
    document.getElementById('budgetCalculatorForm').reset();
    closeModal();
    pdfMake.createPdf(pdfDefinition).download('Estimation_Slip.pdf');
  }
  
  
  function showCheckList() {
    clearRightPane();
    document.getElementById('checklistContent').style.display = 'block';
  
    const checklistHeading = document.createElement('h2');
    checklistHeading.textContent = "Travel Checklist";
  
    const checklistContainer = document.createElement('div');
    checklistContainer.classList.add('checklist-container');
  
    checklistContainer.appendChild(checklistHeading);
    const categories = {
        "Travel/Personal Documents": ["Aadhar Card[Original]", "Driving License[Original]-Mandatory for Bike Rentals"],
        "Health and Safety": ["Tablets", "Balm"],
        "Money and Banking": ["Sufficient Cash in Hand", "Cards if you want to Carry"],
        "Electronics": ["Headphones", "Mobile Charger"],
        "Personal Care and Hygiene": ["Sun screen", "Toothbrush and toothpaste","Shampoo","Soap or body wash","Comb"],
        "Clothing and Accessories": ["Sun Glasses","Cap/Hat","Comfortable walking shoes","Sweaters", "Head bands/Ear Covers"],
        "Miscellaneous": ["Reusable water bottle", "Snacks"],
    };
  
    for (const category in categories) {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = category;
  
        fieldset.appendChild(legend);
  
        categories[category].forEach(itemText => {
            const checklistItem = document.createElement('label');
            const checkbox = document.createElement('input');
  
            checkbox.type = 'checkbox';
            checklistItem.textContent = itemText;
  
            const toggleStrikeOff = () => {
                if (checkbox.checked) {
                    checklistItem.style.textDecoration = 'line-through';
                } else {
                    checklistItem.style.textDecoration = 'none';
                }
            };
  
            checkbox.addEventListener('change', toggleStrikeOff());
            checklistItem.addEventListener('click', () => {
                checkbox.checked = !checkbox.checked;
                toggleStrikeOff();
            });
  
            fieldset.appendChild(checkbox);
            fieldset.appendChild(checklistItem);
            fieldset.appendChild(document.createElement('br'));
        });
  
        checklistContainer.appendChild(fieldset);
    }
  
    const checklistContent = document.getElementById('checklistContent');
    checklistContent.appendChild(checklistContainer);
  }
  