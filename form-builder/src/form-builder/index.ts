import { Rule, SchematicContext, Tree, url, apply, template, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import * as data from './controls.json'




// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function formBuilder(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url("./files");
    console.log("you entered", _options.controlsInRow)
    const sourceParameterizeTemplate = apply(sourceTemplate,
      [template({
        ..._options,
        ...strings,
        getControls,
        getLength,
        getHtmlControls
      })
      ]);

    tree = mergeWith(sourceParameterizeTemplate)(tree, _context) as Tree
    return tree;
  };
}

function getControls() {
  return data.controls;
}

function getLength(): number {
 return  data.controls.length;
}

function getHtmlControls(type:string):string{
  return dict[type];
}

const dict: { [id: string]: string; } = {
  "text": "<adek-text [group]=\"group\" [controlName]=\"#controlName#\" ></adek-text>",
  "bool": "<adek-check [group]=\"group\" [controlName]=\"#controlName#\" ></adek-check>",
}
