    
const textArea = document.querySelector('.textarea-container');
const welcomeText = document.querySelector('.welcometext-container');
const spin = document.querySelector('.spin-container');

// Function to show welcome text and text area after 2 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        welcomeText.style.display = 'flex';
        textArea.style.display = 'flex';
        spin.style.display = 'none';
    }, 1000);
});

const textInput = document.querySelector('.text-input');
const saveButton = document.querySelector('.save');
const notecotainer = document.querySelector('.notesaved-container');
const alert = document.querySelector('.alert');

// Function to display alert message
function displayAlert(text, classList) {
    alert.classList = classList;
    alert.innerHTML = text;
}

// Function to clear green alert after 2 seconds
function clearGreenAlert() {
    setTimeout(function() {
        if (alert.classList.contains('green-alert')) {
            alert.classList.remove('green-alert');
            alert.innerHTML = '';
        }
    }, 2000);
}

// Function to clear red alert after 2 seconds
function clearRedAlert() {
    setTimeout(function() {
        if (alert.classList.contains('red-alert')) {
            alert.classList.remove('red-alert');
            alert.innerHTML = '';
        }
    }, 2000);
}

// Function to reset input field to default
function setToDefault() {
    textInput.value = '';
}

// Function to store notevalue in local storage
function storeNoteInLocalStorage(id, notevalue) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ id: id, note: notevalue });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to retrieve notes from local storage and display them
function displayNotesFromLocalStorage() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(function(note) {
        const newElement = document.createElement('div');
        newElement.innerHTML = `
            <div data-id=${note.id} class="note-words">${note.note} 
                <button class="delete">delete</button>
            </div>`;
        notecotainer.appendChild(newElement);

        // Add event listener for delete button
        const deleteButton = newElement.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            deleteNoteFromLocalStorage(note.id);
            newElement.remove();
            displayAlert('Note has been deleted', 'red-alert');
            clearRedAlert();
        });
    });
}

// Function to delete note from local storage
function deleteNoteFromLocalStorage(id) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(function(note) {
        return note.id !== id;
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Event listener for save button
saveButton.addEventListener('click', function() {
    let notevalue = textInput.value;
    id = Math.floor(Math.random() * 10000);

    if (notevalue === '') {
        displayAlert('Please input your thought', 'red-alert');
        clearRedAlert();
    } else {
        const newElement = document.createElement('div');
        newElement.innerHTML = `
            <div data-id=${id} class="note-words">${notevalue} 
                <button class="delete">delete</button>
            </div>`;
        notecotainer.appendChild(newElement);

        storeNoteInLocalStorage(id, notevalue);

        displayAlert('Note has been saved', 'green-alert');
        clearGreenAlert();

        // Add event listener for delete button
        const deleteButton = newElement.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            deleteNoteFromLocalStorage(id);
            newElement.remove();
            displayAlert('Note has been deleted', 'red-alert');
            clearRedAlert();
        });
    }

    setToDefault();
});

// Display notes from local storage on page load
displayNotesFromLocalStorage();
