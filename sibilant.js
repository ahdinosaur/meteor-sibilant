var sibilant = Npm.require('sibilant');

Plugin.registerSourceHandler('sibilant', function(compileStep) {

    var contents;
    try {
      contents = sibilant.translateFile(compileStep.inputPath);
    } catch (e) {
      throw new Error(e.message);
    }

    compileStep.addJavaScript({
      path: compileStep.inputPath.replace(/\.sibilant$/, '.js'),
      sourcePath: compileStep.inputPath,
      data: contents,
      bare: true
    });
  });
