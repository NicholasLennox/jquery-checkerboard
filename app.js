$('document').ready(function() {
    // Define grid size
    let rows = 7;
    let cols = 7;
    let letters = "ABCDEFG"; // Want cells to be named A1,A2, etc.

    // Start with rows
    for (let row = 0; row < rows; row++) {
        // Row id: rowA, rowB, rowC, etc.
        let rowId = `row${letters[row]}`;
        let rowEl = $('<div class="row"></div>').attr('id',rowId);

        // Create columns and add to row
        for (let col = 0; col < cols; col++) {
            // Col id: A1, A2, etc
            let colId = `${letters[row]}${col+1}`; // Use row for letters (rowA, etc)
            let colEl = $('<div class="block"></div>').attr('id',colId).text(colId);
            // Append to current row
            $(rowEl).append(colEl);
        }
        // Add row to checkerboard
        $('#checkerboard').append(rowEl);
    }

    // Add checkerboard pattern

    // Split odd and even rows, as they alternate.
    // Even rows (index): 0,2,4,6
    $('#checkerboard').children('[id^=row]:even').each(function() {
        $(this).children('.block:even').addClass('black');
    });

    // Odd rows (index): 1,3,5,7
    $('#checkerboard').children('[id^=row]:odd').each(function() {
        $(this).children('.block:odd').addClass('black');
    });

    console.log($('#checkerboard .block').length);  // Should log 49 if 7x7 grid

    // Change to mousedown, mouseup
    // Child selector $('#checkerbaord').on('click','.block', function())
    // The child selector makes sure that any elements that are added dynamically 
    // after this line of code has run also has the event. 
    // The current code, only adds this for current elements.
    $('#checkerboard .block').on('mousedown', function() {
        console.log($(this).attr('id'));
        $(this).css('cursor','grabbing');
    });

    $('#checkerboard .block').on('mouseup', function() {
        $(this).css('cursor','grab');
    });

    // On mouseenter, make text random colour
    $('#checkerboard .block').on('mouseover', function() {
        $(this).css('color', getRandomRgb());
    });

    // On mouseout, reset the text
    $('#checkerboard .block').on('mouseleave', function() {
        $(this).css('color', '');
    });

});

function getRandomRgb() {
    let randomR = Math.floor(Math.random()*256);
    let randomG = Math.floor(Math.random()*256);
    let randomB = Math.floor(Math.random()*256);
    return `rgb(${randomR},${randomG},${randomB})`;
}


