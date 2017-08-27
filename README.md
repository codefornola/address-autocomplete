# address-autocomplete
A tool to autocomplete valid New Orleans addresses in html forms

This tool will pull addresses from [data.nola.gov](https://data.nola.gov/Geographic-Base-Layers/Addresses/s4ns-ak5d) and build a [trie](https://en.wikipedia.org/wiki/Trie) that can be used to autocomplete addresses.


### setup

First, download the data
```
wget -O addresses.csv https://opendata.arcgis.com/datasets/b7956c8840554a25ae4e35d08b8c17a6_0.csv
```

Then parse the csv to pull out the addresses and store them in a javascript file.
```
python build_addresses.py
```

Start a server
```
python3 -m http.server
```

Try out the autocomplete by typing an address: http://localhost:8000/



