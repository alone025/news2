// Function to format the date like "Feb. 4, 2023"
export function formatDate(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);
  
    // Format for "Feb. 4, 2023"
    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
  
    return formattedDate;
  }
  
  // Function to format the time like "12:30"
  export function formatTime(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);
  
    // Format for "12:30"
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  
    return formattedTime;
  }
  

   export function formatDateToRussian(dateString) {
      // Create a new Date object from the input date string
      const date = new Date(dateString);
      
      // Create a formatter for Russian locale with the desired format
      const options = { month: 'short', day: 'numeric' };
      const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
      
      return formattedDate;
    }
  
  
    export function formatDateDDMMYYYY(dateString) {
        // Create a new Date object from the input date string
        const date = new Date(dateString);
      
        // Get the day, month, and year
        const day = String(date.getDate()).padStart(2, '0');  // Ensure 2 digits
        const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed, so add 1
        const year = date.getFullYear();
      
        // Return the formatted date in "dd.mm.yyyy" format
        return `${day}.${month}.${year}`;
      }