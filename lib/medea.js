#! /usr/bin/env node

/*
 * MEDEA
 * https://github.com/johnwest/medea
 *
 * Copyright (c) 2013 John West
 * Licensed under the MIT license.
 */

( function() {

// define some variables.
var fs = require( 'fs' );
var userArguments = process.argv.slice( 2 );
var inputFile = userArguments[0];
var outputFile = userArguments[1];

// define the callback we'll use after we read in a file.
var callback = function( error, data ) {
  
  // report any errors.
  if( error ) {
    console.log( error );
  
  // if there are no errors.
  } else {
    
    // log it.
    console.log( 'input file:', inputFile );
    console.log( 'output file:', outputFile ); 

    // strip it.
    var reformedData = data.replace( /\t/g, '' );
        reformedData = reformedData.replace( /\n/g, '' );
        reformedData = reformedData.replace( /\r/g, '' );
        reformedData = reformedData.replace( / {2,}/g, '' );


    // push it.
    fs.writeFile( outputFile, reformedData, function( error ) {
      if( error ) { console.log( error ); }
      else { console.log( 'Your file can be found at ', outputFile ); }
    });

  }
}

fs.readFile( inputFile, 'utf-8', callback );

})();
