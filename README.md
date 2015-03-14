This repo is a collection of some extensions to [Angular Schema Form](https://github.com/Textalk/angular-schema-form)

## sf-equal-to
A textbox that will become invalid if it does not equal another textbox. Reference using the other value's JSON Schema identifier. Useful for password checking.

Schema:

	{
		someNumber: {type: 'number'},
		someOtherNumber: {type: 'number'}
	}

Layout:
	
	{
		key: 'someNumber',
		equalTo: 'someOtherNumber'
	}

## sf-convert-units
A textbox of type Number with a drop-down that converts the raw text input value from one unit to another. The JSON value will automatically mutliply the textbox value with the correct conversion. Future development will allow you to choose units and their conversion factor. This can also use the equal-to argument.

Schema:

	{
		someNumber: {type: 'number'}
	}

Layout:
	
	{
		key: 'someNumber',
		type: 'convertselect',
		formType: 'number',
		equalTo: 'someOtherNumber',
		validationMessage: 'Volume removed not equal to volume received'
	}

## sf-multi-radios
Works the same as a regular radio, but allows for multiple headings. for the same radio group.

Schema:

	{
		multiRadio: {
			title: 'Multi Radio',
			type: 'string',
		}
	}

Layout:

	{
		key: 'multiRadio',
		type: 'multiradios',
		groups: [
			{
				title: 'Group 1',
				enum: [
					'Option 1',
					'Option 2',
					'Option 3',
				]
			},
			{
				title: 'Group 2',
				enum: [
					'Option 4',
					'Option 5',
					'Option 6',
				]
			}
		]
	}