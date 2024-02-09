(function(){ var files = ["https://code.highcharts.com/stock/highstock.js","https://code.highcharts.com/highcharts-more.js","https://code.highcharts.com/highcharts-3d.js","https://code.highcharts.com/modules/data.js","https://code.highcharts.com/modules/exporting.js","https://code.highcharts.com/modules/funnel.js","https://code.highcharts.com/modules/annotations.js","https://code.highcharts.com/modules/accessibility.js","https://code.highcharts.com/modules/solid-gauge.js"],loaded = 0; if (typeof window["HighchartsEditor"] === "undefined") {window.HighchartsEditor = {ondone: [cl],hasWrapped: false,hasLoaded: false};include(files[0]);} else {if (window.HighchartsEditor.hasLoaded) {cl();} else {window.HighchartsEditor.ondone.push(cl);}}function isScriptAlreadyIncluded(src){var scripts = document.getElementsByTagName("script");for (var i = 0; i < scripts.length; i++) {if (scripts[i].hasAttribute("src")) {if ((scripts[i].getAttribute("src") || "").indexOf(src) >= 0 || (scripts[i].getAttribute("src") === "http://code.highcharts.com/highcharts.js" && src === "https://code.highcharts.com/stock/highstock.js")) {return true;}}}return false;}function check() {if (loaded === files.length) {for (var i = 0; i < window.HighchartsEditor.ondone.length; i++) {try {window.HighchartsEditor.ondone[i]();} catch(e) {console.error(e);}}window.HighchartsEditor.hasLoaded = true;}}function include(script) {function next() {++loaded;if (loaded < files.length) {include(files[loaded]);}check();}if (isScriptAlreadyIncluded(script)) {return next();}var sc=document.createElement("script");sc.src = script;sc.type="text/javascript";sc.onload=function() { next(); };document.head.appendChild(sc);}function each(a, fn){if (typeof a.forEach !== "undefined"){a.forEach(fn);}else{for (var i = 0; i < a.length; i++){if (fn) {fn(a[i]);}}}}var inc = {},incl=[]; each(document.querySelectorAll("script"), function(t) {inc[t.src.substr(0, t.src.indexOf("?"))] = 1; }); function cl() {if(typeof window["Highcharts"] !== "undefined"){var options={"title":{"text":"","style":{"fontFamily":"Arial","color":"#333333","fontSize":"18px","fontWeight":"normal","fontStyle":"normal"}},"subtitle":{"text":"","style":{"fontFamily":"Arial","color":"#666666","fontSize":"18px","fontWeight":"normal","fontStyle":"normal"}},"exporting":{},"chart":{"type":"line","backgroundColor":"rgba(255, 255, 255, 0.0)","style":{"fontFamily":"Arial","color":"#fff","fontSize":"12px","fontWeight":"bold","fontStyle":"normal"},"marginLeft":70,"marginRight":10,"marginTop":55},"series":[{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":4,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Skipass","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","color":"#ef5350","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":4,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Accomodation","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","color":"#1565c0","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":4,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Ski Rental","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","color":"#9e9e9e","borderWidth":"0","dashStyle":"Solid"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":4,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Ski school/Activities","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","color":"#b71c1c","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":4,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Sporting Goods Outlets","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","color":"#ff8f00","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":3,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Property","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":3,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Restaurants","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":3,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Interests in accomodation/exploitation assets","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":3,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Other","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","dashStyle":"Solid","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25},"brightness":0.1},"select":{"animation":{"duration":0},"color":"#cccccc","borderColor":"#000000"},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","borderRadius":3,"centerInCategory":false,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"startFromThreshold":true,"tooltip":{"distance":6},"threshold":0,"borderColor":"#ffffff","legendSymbol":"lineMarker","name":"Opertaion of Hotels","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"column","borderWidth":"0"},{"lineWidth":2,"allowPointSelect":false,"crisp":true,"showCheckbox":false,"animation":false,"enableMouseTracking":true,"events":{},"marker":{"enabledThreshold":2,"lineColor":"#ffffff","lineWidth":0,"radius":4,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"enabled":true,"radiusPlus":2,"lineWidthPlus":1},"select":{"fillColor":"#cccccc","lineColor":"#000000","lineWidth":2}},"symbol":"circle"},"point":{"events":{}},"dataLabels":{"animation":{},"align":"center","borderWidth":0,"defer":true,"formatter":"function(){let{numberFormatter:t}=this.series.chart;return\"number\"!=typeof this.y?\"\":t(this.y,-1)}","padding":5,"style":{"fontSize":"12px","fontWeight":"bold","color":"contrast","textOutline":"1px 1px contrast"},"verticalAlign":"bottom","x":0,"y":0},"cropThreshold":300,"opacity":1,"pointRange":0,"softThreshold":true,"states":{"normal":{"animation":true},"hover":{"animation":{"duration":150},"lineWidthPlus":1,"marker":{},"halo":{"size":10,"opacity":0.25}},"select":{"animation":{"duration":0}},"inactive":{"animation":{"duration":150},"opacity":0.2}},"stickyTracking":true,"turboThreshold":0,"findNearestPointBy":"x","legendSymbol":"lineMarker","name":"Total","dataGrouping":{"groupPixelWidth":2,"dateTimeLabelFormats":{"millisecond":["%A, %e %b, %H:%M:%S.%L","%A, %e %b, %H:%M:%S.%L","-%H:%M:%S.%L"],"second":["%A, %e %b, %H:%M:%S","%A, %e %b, %H:%M:%S","-%H:%M:%S"],"minute":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"hour":["%A, %e %b, %H:%M","%A, %e %b, %H:%M","-%H:%M"],"day":["%A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"week":["Week from %A, %e %b %Y","%A, %e %b","-%A, %e %b %Y"],"month":["%B %Y","%B","-%B %Y"],"year":["%Y","%Y","-%Y"]}},"type":"spline","color":"#fff","borderWidth":"0"}],"data":{"csv":"\"Year\";\"Skipass\";\"Accomodation\";\"Ski Rental\";\"Ski school/Activities\";\"Sporting Goods Outlets\";\"Property\";\"Restaurants\";\"Interests in accomodation/exploitation assets\";\"Other\";\"Opertaion of Hotels\";\"Total\"\n\"2018/19\";1393;303;188;57;171;109;0;229;226;0;2676\n\"2019/20\";1231;261;163;50;179;102;0;176;199;0;2362\n\"2020/21\";1143;640;127;41;207;113;7;197;239;37;2751\n\"2021/22\";1731;920;224;61;289;127;73;88;211;367;4092\n\"2022/23\";1686;883;223;59;341;143;24;247;179;497;4281","googleSpreadsheetKey":false,"googleSpreadsheetWorksheet":false},"pane":{"background":[]},"responsive":{"rules":[]},"legend":{"itemStyle":{"fontFamily":"Arial","color":"#fafafa","fontSize":"12px","fontWeight":"bold","fontStyle":"normal","cursor":"pointer"},"itemHiddenStyle":{"fontFamily":"Arial","color":"#bdbdbd","fontSize":"12px","fontWeight":"normal","fontStyle":"normal"},"itemHoverStyle":{"color":"#bdbdbd"},"itemMarginTop":10,"navigation":{"activeColor":"#c62828"}},"plotOptions":{"series":{"dataLabels":{"style":{"color":"contrast","fontSize":"12px","fontWeight":"bold","textOutline":"1px 1px contrast"}},"animation":false}},"navigation":{"buttonOptions":{"enabled":false}},"credits":{"enabled":false},"xAxis":[{"gridLineColor":"#e6e6e6","tickColor":"#ccd6eb","lineColor":"rgba(255, 255, 255, 0.0)","minorGridLineColor":"#f2f2f2","type":"category","labels":{"style":{"color":"#fff"}}}],"yAxis":[{"lineColor":"#ccd6eb","gridLineColor":"rgba(255, 255, 255, 0.0)","showEmpty":true,"visible":true,"title":{"text":""},"labels":{"style":{"color":"#fff"}}}],"colors":["#7cb5ec","#bdbdbd","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1"]};/*
// Sample of extending options:
Highcharts.merge(true, options, {
    chart: {
        backgroundColor: "#bada55"
    },
    plotOptions: {
        series: {
            cursor: "pointer",
            events: {
                click: function(event) {
                    alert(this.name + " clicked\n" +
                          "Alt: " + event.altKey + "\n" +
                          "Control: " + event.ctrlKey + "\n" +
                          "Shift: " + event.shiftKey + "\n");
                }
            }
        }
    }
});
*/new Highcharts.Chart("highcharts-05026a6b-a9e9-4d87-9343-4551220dd5be", options);}}})();


