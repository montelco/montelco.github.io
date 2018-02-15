# RCGC Project Silk Redesign

The RCGC redesign, aka Project Silk, is designed to modernize the layout of the RCGC website with the intention of making a layout that is instantly classic and timeless. Yet, design tastes, even in Project Silk must be adaptable to changing trends within the web design market. As a result of this, the raw code found in this project is isolated. Each files can live independent of another, can be recombined in any number of ways, and can be restyled without changing mountains of code. In an effort to make the source code approachable, this developer documentation is provided as a resource to get started.

## Style Formatting

> You will notice that production files differ from development files. In development, every file maintains a unique name but to reduce the number of stack calls and render-blocking scripts, the files are compressed and 'compiled' into `page.css` and `mobile-page.css` (with `page.min.css` and `mobile-page.min.css` ultimately being delivered to the user as the end-user does not care about whitespace). 

> The stylesheets for Project Silk are named based on their scope, importance, and area of impact. You will find that files prefiexed with `mobile` are for mobile devices, `big` for large displays, `print` for printed formatting, etc. After the prefix (which defaults to desktop is none is set) is the importance string. Examples of this may be `core`, `general`, `pretty`, etc. After the importance of the file comes the area of impact eg: `masterpage`, `pagelayout`, etc.

> ###Style Formatting Practice

>> Consider the example file `mobile.pretty.pagelayout.pullquote.css`. Explaining the scope, importance, and area of impact are simple, as the file only applies to mobile devices, it's low on importance given that it is a pretty stylesheet, and this styling is applied at the page layout level and bears no impact on the masterpage. Finally, the friendly name zone allows for further understanding that this mobile-only pretty page layout stylesheet only contains controls for formatting pullquotes.

>> Consider the example file `general.pagelayout.search.css`. Explaining the scope, importance, and area of impact are simple, the file does not contain a device scope prefix therefore it applies to all display sizes unless there is another file that contains a scope-specific prefix, it's normal on importance given that it is a general stylesheet, and this styling is applied at the page layout level and bears no impact on the masterpage. Finally, the friendly name zone allows for further understanding that this general page layout stylesheet only contains controls for formatting search-related elements.

## Dealing with Non-Standard Device Behaviors

> As of this writing, the iOS operating system contains non-standard behavior related to a `background-size: cover` image where the `background-attachment` is set to `fixed`. The non-standard behavior occurs as a result of the device covering the entire document, not just the element. This results in images appearing zoomed-in and distorted. Mitigation of this non-standard behavior is documented in forums such as [Stack Overflow](https://stackoverflow.com/questions/24154666/background-size-cover-not-working-on-ios).