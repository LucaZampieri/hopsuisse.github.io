# [hopsuisse.github.io](https://hopsuisse.github.io)

This website summarizes a school project for the [Applied Data
Analysis](https://adaepfl.github.io) course at [EPFL](https://epfl.ch).

The code, the Jupyter notebooks and the data files used to build it can be found
on [this repository](https://github.com/ggrrll/hop_suisse_ada_project_public).

## Building locally

```sh
gem install jekyll bundler # to install bundler and jekyll
bundle exec jekyll serve
```

*Note* : as many JSON files are involved, the first build can be **very** long.
A good idea when it's done is to modify the `_config.yml` and uncomment the
following lines in both `exclude` and `keep_files` part :

```
#- runnerdata
#- racedata
#- filenames
```

## Tools 

* [C3.js](http://c3js.org) on top of [D3.js](https://d3js.org)
* [jQuery-Autocomplete](https://github.com/devbridge/jQuery-Autocomplete)
* [Leaflet](http://leafletjs.com)
* [Google Fonts](https://fonts.google.com)
* [Glyphicons Free](https://glyphicons.com)
* [Weather Icons](https://erikflowers.github.io/weather-icons/)

