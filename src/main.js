import './styles.css';
import { wordCount, vowelCount, consonantCount, getTeaser } from './journal.js';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var date = $('#date').val();
    var entry = $('#entry').val();
    $('#output').prepend(`<h3> ${date} </h3><details><summary> ${getTeaser(entry)}... </summary> ${entry} </details><li>Word Count: ${wordCount(entry)}</li><li>Vowel Count: ${vowelCount(entry)}</li><li>Consonant Count: ${consonantCount(entry)}</li><hr>`);
  });
});