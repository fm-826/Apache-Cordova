var db = openDatabase('mytasks', '1.0', 'RentalZ Properties', 5 * 1024 * 1024); // [database name, version number, text description, estimated database size in Megabytes (MB)]

// function to initiate database
function init() {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    db.transaction(function (tx) {
        tx.executeSql('DROP TABLE properties'); //delete table everytime the page loads
        tx.executeSql('CREATE TABLE IF NOT EXISTS properties(id INTEGER PRIMARY KEY AUTOINCREMENT, propertytype TEXT, bedrooms TEXT, propertyadditiondate TEXT, propertyadditiontime TEXT, monthlyrent TEXT, furnituretype TEXT, description TEXT, reporter TEXT)');


        //inserts user-defined data into the database, 'displayAll' function is then called to show the table containing data
        //Record 1
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("House", "3", "2018-01-15", "09:17", "569", "Part furnished", "", "Myles Findlay")');

        //Record 2
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "Studio", "2018-01-17", "09:43", "895", "Part furnished", "", "Joe Bloggs")');

        //Record 3
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("House", "6", "2018-01-18", "10:07", "602", "Unfurnished", "", "Johnny Appleseed")');

        //Record 4
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Bungalow", "3", "2018-01-19", "10:11", "737", "Part furnished", "", "Jean Dupont")');

        //Record 5
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "3", "2018-01-22", "10:16", "515", "Part furnished", "", "Jean Dupont")');

        //Record 6
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("House", "3", "2018-01-25", "10:41", "121", "Furnished", "", "Hans Mustermann")');

        //Record 7
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "3", "2018-01-26", "10:46", "946", "Part furnished", "", "Chris Wong")');

        //Record 8
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "4", "2018-01-29", "11:02", "217", "Furnished", "", "Chris Wong")');

        //Record 9
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "1", "2018-01-30", "11:20", "308", "Furnished", "", "Ivan Horvat")');

        //Record 10
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "8", "2018-01-31", "11:22", "471", "Furnished", "", "Ivan Horvat")');

        //Record 11
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "Studio", "2018-02-01", "12:50", "612", "Part furnished", "", "Myles Findlay")');

        //Record 12
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "1", "2018-02-02", "13:19", "134", "Part furnished", "", "Jean Dupont")');

        //Record 13
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Bungalow", "8", "2018-02-05", "13:55", "883", "Furnished", "", "Johnny Appleseed")');

        //Record 14
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "Studio", "2018-02-06", "14:12", "398", "Unfurnished", "", "Mario Rossi")');

        //Record 15
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Bungalow", "5", "2018-02-08", "15:02", "538", "Furnished", "", "Joe Bloggs")');

        //Record 16
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "5", "2018-02-09", "15:10", "717", "Furnished", "", "Ivan Horvat")');

        //Record 17
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Bungalow", "4", "2018-02-14", "15:11", "109", "Furnished", "", "Hans Mustermann")');

        //Record 18
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Apartment", "1", "2018-02-15", "15:24", "954", "Unfurnished", "", "Johnny Appleseed")');

        //Record 19
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "6", "2018-02-16", "15:31", "263", "Furnished", "", "Chris Wong")');

        //Record 20
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "8", "2018-02-19", "15:56", "212", "Unfurnished", "", "Mario Rossi")');

        //Record 21
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("House", "7", "2018-02-20", "16:05", "919", "Unfurnished", "", "Anna Kowalska")');

        //Record 22
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Bungalow", "2", "2018-02-22", "16:07", "662", "Part furnished", "", "Anna Kowalska")');

        //Record 23
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "2", "2018-02-26", "16:13", "945", "Furnished", "", "Myles Findlay")');

        //Record 24
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "2", "2018-02-27", "16:24", "265", "Unfurnished", "", "Jean Dupont")');

        //Record 25
        tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values("Flat", "5", "2018-02-28", "16:53", "341", "Furnished", "", "Hans Mustermann")');

        //        displayAll();
    });
}


// function to show all rows
function displayAll() {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM properties', [], function (tx, results) {
            var n = results.rows.length;
            var s = '<h2>All Properties</h2>'; //title
            s += '<table cellpadding="2" cellspacing="2" border="1">'; //'table' opening tag
            s += '<tr><th>ID</th><th>Property Type</th><th>Bedrooms</th><th>Property Addition Date</th><th>Property Addition Time</th><th>Monthly Rent (&pound;)</th><th>Furniture Type</th><th>Description</th><th>Reporter Name</th><th>Option</th></tr>'; //titles for table columns
            for (var i = 0; i < n; i++) { //for loop - when 'i' varibale is less than n, increment by 1 + add new column with certain user-defined data
                var work = results.rows.item(i);
                s += '<tr>'; //'tr' (table row) (opening tag)
                s += '<td>' + work.id + '</td>'; //add 'id' value to this cell
                s += '<td>' + work.propertytype + '</td>'; //add user-defined 'propertytype' value to this cell
                s += '<td>' + work.bedrooms + '</td>'; //add user-defined 'bedrooms' value to this cell
                s += '<td>' + work.propertyadditiondate + '</td>'; //add user-defined 'propertyadditiondate' value to this cell
                s += '<td>' + work.propertyadditiontime + '</td>'; //add user-defined 'propertyadditiontime' value to this cell
                s += '<td>' + work.monthlyrent + '</td>'; //add user-defined 'monthlyrent' value to this cell
                s += '<td>' + work.furnituretype + '</td>'; //add user-defined 'furntiuretype' value to this cell
                s += '<td>' + work.description + '<a href="#" onclick="edit(' + work.id + ')">Edit</a></td>'; //add user-defined 'description' value to this cell
                s += '<td>' + work.reporter + '</td>'; //add user-defined 'reporter' value to this cell
                s += '<td><a href="#" onclick="del(' + work.id + ')">Delete</a></td>';
                s += '</tr>'; //'tr' (table row) closing tag
            }
            s += '</table>'; //'table' closing tag
            document.getElementById('result').innerHTML = s; //store all table content into the 'result' element
        });
    });
}


// function to add a new row, and insert data added/selected from form fields as necessary
function add() {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    db.transaction(function (tx) { //show dialog asking user if they want to delete the row
        var result = confirm('All entered information will be stored in the database'); //dialog messeage
        if (result === true) { //if 'OK' button is clicked, delete the particular row
            var propertytype = document.getElementById('propertyType').value; //variable representing user-defined selection of the 'propertyType' element (select list)
            var bedrooms = document.getElementById('bedroomsCount').value; //variable representing user-defined selection of the 'bedroomsCount' element (select list)
            var propertyadditiondate = document.getElementById('propertyAdditionDate').value; //variable representing user-defined selection of the 'propertyAdditionDate' element (date picker)
            var propertyadditiontime = document.getElementById('propertyAdditionTime').value; //variable representing user-defined selection of the 'propertyAdditionTime' element (time picker)
            var monthlyrent = document.getElementById('monthlyRent').value; //variable representing user-defined data of the 'monthlyRent' element (text area)
            var furnituretype = document.getElementById('furnitureType').value; //variable representing user-defined selection of the 'furnitureType' element (select list)
            var description = document.getElementById('description').value; //variable representing user-defined data of the 'description' element (text area)
            var reporter = document.getElementById('reporter').value; //variable representing user-defined data of the 'description' element (text area)
            tx.executeSql('INSERT INTO properties(propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter) values(?, ?, ?, ?, ?, ?, ?, ?)', [propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter], displayAll()); //inserts users defined data into the database, 'displayAll' function is then called to show the table containing data
        }
    });
}


// function to delete a row
function del(id) {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    db.transaction(function (tx) { //show dialog asking user if they want to delete the row
        var result = confirm('All data from this row will be deleted.'); //dialog messeage
        if (result === true) { //if 'OK' button is clicked, delete the particular row
            tx.executeSql('DELETE FROM properties WHERE id = ?', [id], displayAll());
        }
    });
}


// function to delete the table
function delTable(id) {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    db.transaction(function (tx) { //show dialog asking user if they want to delete the row
        var result = confirm('All data in this table will be deleted.'); //dialog messeage
        if (result === true) { //if 'OK' button is clicked, delete the particular row
            tx.executeSql('DROP TABLE properties', [id], displayAll());
        }
    });
}

// function to edit a row
function edit(id) {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    db.transaction(function (tx) { //show dialog asking user if they want to delete the row
        var result = confirm('Data from this row will be added to the input fields. Please make any necessary changes, then click "Save" when you have finished.'); //dialog messeage
        if (result === true) { //if 'OK' button is clicked, delete the particular row
            tx.executeSql('SELECT * FROM properties WHERE id = ?', [id], function (tx, results) {
                var work = results.rows.item(0);
//                document.getElementById('id').value = work.id;
//                document.getElementById('propertyType').value = work.propertytype;
//                document.getElementById('bedroomsCount').value = work.bedrooms;
                document.getElementById('propertyAdditionDate').value = work.propertyadditiondate;
                document.getElementById('propertyAdditionTime').value = work.propertyadditiontime;
                document.getElementById('monthlyRent').value = work.monthlyrent;
//                document.getElementById('furnitureType').valueOf = work.furnituretype;
                document.getElementById('description').value = work.description;            
                document.getElementById('reporter').value = work.reporter;
            });
        }
    });
}


// function to overwrite a row
function overwrite(id) {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    db.transaction(function (tx) { //show dialog asking user if they want to delete the row
        var result = confirm('Existing data in this row will be overwritten.'); //dialog messeage
        if (result === true) { //if 'OK' button is clicked, delete the particular row
            tx.executeSql('UPDATE properties SET propertytype = ?, bedrooms = ?, propertyadditiondate = ?, propertyadditiontime = ?, monthlyrent = ?, furnituretype = ?, description = ?, reporter = ? WHERE id = ?', [propertytype, bedrooms, propertyadditiondate, propertyadditiontime, monthlyrent, furnituretype, description, reporter], displayAll());
        }
    });
}

// function to search for specific data
function search(id) {
    "use strict"; //literal expression - tells the webpage that the JavaScript code should be executed in "strict mode". With "strict mode", undeclared variables (e.g.) cannot be used.

    //show records that match the user-defined value for the 'propertytype' field
//    var propertytype = $('#propertyType').find(":selected").text();

//    var bedrooms = $('#bedroomsCount').find(":selected").text();

//        var furnituretype = $('#furnitureType').find(":selected").text();

    db.transaction(function (tx) {
//        tx.executeSql('SELECT * FROM properties WHERE propertytype = ?', [propertytype], function (tx, results) {
//        tx.executeSql('SELECT * FROM properties WHERE bedrooms = ?', [bedrooms], function (tx, results) {
        tx.executeSql('SELECT * FROM properties WHERE furnituretype = ?', [furnituretype], function (tx, results) {
            var n = results.rows.length;
            var s = '<h2>Search results</h2>'; //title
            s += '<table cellpadding="2" cellspacing="2" border="1">'; //'table' opening tag
            s += '<tr><th>ID</th><th>Property Type</th><th>Bedrooms</th><th>Property Addition Date</th><th>Property Addition Time</th><th>Monthly Rent (&pound;)</th><th>Furniture Type</th><th>Description</th><th>Reporter Name</th><th>Option</th></tr>'; //titles for table columns
            for (var i = 0; i < n; i++) { //for loop - when 'i' varibale is less than n, increment by 1 + add new column with certain user-defined data
                var work = results.rows.item(i);
                s += '<tr>'; //'tr' (table row) (opening tag)
                s += '<td>' + work.id + '</td>'; //add 'id' value to this cell
                s += '<td>' + work.propertytype + '</td>'; //add user-defined 'propertytype' value to this cell
                s += '<td>' + work.bedrooms + '</td>'; //add user-defined 'bedrooms' value to this cell
                s += '<td>' + work.propertyadditiondate + '</td>'; //add user-defined 'propertyadditiondate' value to this cell
                s += '<td>' + work.propertyadditiontime + '</td>'; //add user-defined 'propertyadditiontime' value to this cell
                s += '<td>' + work.monthlyrent + '</td>'; //add user-defined 'monthlyrent' value to this cell
                s += '<td>' + work.furnituretype + '</td>'; //add user-defined 'furntiuretype' value to this cell
                s += '<td>' + work.description + '</td>'; //add user-defined 'description' value to this cell
                s += '<td>' + work.reporter + '</td>'; //add user-defined 'reporter' value to this cell
                s += '<td><a href="#" onclick="del(' + work.id + ')">Delete</a></td>';
                s += '</tr>'; //'tr' (table row) closing tag
            }
            s += '</table>'; //'table' closing tag
            document.getElementById('result').innerHTML = s; //store all table content into the 'result' element
        });
    });
}
