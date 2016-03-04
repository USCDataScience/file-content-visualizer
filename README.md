## Content Visualization

CSCI-599 Spring 2016 - Team 1, Assignment 1

An Angular-D3 web application to visualize results gleaned from analysis on the Trec-Ploar-Dataset.

[Analysis](https://github.com/nithinkrishna/file-content-analyzer) results need to be copied into
the `app/data/computed/{bfa|bfc|bfcc|fht}` folder.

Visiting `http://localhost:9000/#/visualize/{bfa|bfc|bfcc|fht}/:file` will display the corresponding
visualization.

This app comes shipped with results gathered from some initial analysis on the data set.

## SETUP

``` bash
gem install compass
npm install
bower install

# Start server
grunt serve

# Visit http://localhost:9000 to view the app
```
