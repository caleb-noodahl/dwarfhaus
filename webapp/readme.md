# dwarfhaus.web.app

## build

modifying any html will require you to re-bundle the solution

```bash
C:\Code\nodejs\dwarfhaus\webapp\public\src\js> browserify main.js -o bundle.js
```

## deploy

```bash
C:\Code\nodejs\dwarfhaus\webapp> firebase deploy

=== Deploying to 'dwarfhaus'...

i  deploying hosting
i  hosting[dwarfhaus]: beginning deploy...
i  hosting[dwarfhaus]: found 6 files in public
+  hosting[dwarfhaus]: file upload complete
i  hosting[dwarfhaus]: finalizing version...
+  hosting[dwarfhaus]: version finalized
i  hosting[dwarfhaus]: releasing new version...
+  hosting[dwarfhaus]: release complete
```
