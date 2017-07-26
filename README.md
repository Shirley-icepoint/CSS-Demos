# CSS-Demos
## Notes for CSS
### Flexbox Safari bug 
https://stackoverflow.com/questions/34250282/flexbox-safari-bug-flex-wrap  
Bootstrap `.row` class set `::before` with `content: ' '`. While Safari treats `:before` and `:after` pseudo-elements as if they were real elements. If we are using flex-wrap and row at the same time, we cannot set max-width of the container exactly the same size as the addtion of width of flex items. 
