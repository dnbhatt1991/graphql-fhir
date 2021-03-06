const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');

/**
 * @name exports
 * @summary Signature Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Signature_Input',
	description: 'Base StructureDefinition for Signature Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/signature-type
		type: {
			type: new GraphQLList(new GraphQLNonNull(require('./coding.input.js'))),
			description:
				'An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.',
		},
		_when: {
			type: require('./element.input.js'),
			description: 'When the digital signature was signed.',
		},
		when: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'When the digital signature was signed.',
		},
		_whoUri: {
			type: require('./element.input.js'),
			description:
				'A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).',
		},
		whoUri: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).',
		},
		whoReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).',
		},
		_contentType: {
			type: require('./element.input.js'),
			description:
				'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature.',
		},
		contentType: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature.',
		},
		_blob: {
			type: require('./element.input.js'),
			description: 'The base64 encoding of the Signature content.',
		},
		blob: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The base64 encoding of the Signature content.',
		},
	}),
});
