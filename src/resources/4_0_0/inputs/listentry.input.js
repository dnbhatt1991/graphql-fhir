const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Listentry Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Listentry_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		flag: {
			type: require('./codeableconcept.input.js'),
			description:
				'The flag allows the system constructing the list to indicate the role and significance of the item in the list.',
		},
		_deleted: {
			type: require('./element.input.js'),
			description: 'True if this item is marked as deleted in the list.',
		},
		deleted: {
			type: GraphQLBoolean,
			description: 'True if this item is marked as deleted in the list.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'When this item was added to the list.',
		},
		date: {
			type: DateTimeScalar,
			description: 'When this item was added to the list.',
		},
		item: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A reference to the actual resource from which data was derived.',
		},
	}),
});
