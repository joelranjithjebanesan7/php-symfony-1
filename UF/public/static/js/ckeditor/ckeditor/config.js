/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Source,Print,NewPage,Preview,Templates,Cut,Copy,Undo,Find,Redo,Paste,PasteText,PasteFromWord,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,About,Maximize,TextColor,Styles,BGColor,BidiRtl,NumberedList,Outdent,Blockquote,Link,BidiLtr,Flash,Table,Anchor,Unlink,BulletedList,Indent,CreateDiv,Language,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,RemoveFormat,Subscript,Superscript,Format,Font,ShowBlocks';
	CKEDITOR.plugins.registered['save']=
	{
		 init : function( editor )
		 {
			var command = editor.addCommand( 'save', 
			   {
				  modes : { wysiwyg:1, source:1 },
				  exec : function( editor ) {
					 var fo=editor.element.$.form;
					 editor.updateElement();
					 rxsubmit(fo);
				  }
			   }
			);
			editor.ui.addButton( 'Save',{label : 'My Save',command : 'save'});
		 }
	  }

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
