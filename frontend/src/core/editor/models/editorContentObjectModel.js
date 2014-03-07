define(function(require) {

	var EditorModel = require('coreJS/editor/models/editorModel');

	var EditorContentObjectModel = EditorModel.extend({
		urlRoot: '/api/content/contentobject',
		initialize: function() {}
	}, 
	{
		_parent: 'course',
    	_siblings:'contentObjects',
        _children: 'articles'
	});

	return EditorContentObjectModel;

});