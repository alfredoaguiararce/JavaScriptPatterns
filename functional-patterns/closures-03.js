/* The code is defining an object called `auditProps` which contains properties related to auditing.
These properties include `createdAt`, `updatedAt`, `createdby`, and `updatedby`. Each property has
its own configuration, such as default values and references to other objects. */

/* The code is defining an object called `auditProps` which contains properties related to auditing. */
const auditProps = {
    createdAt : { default: new Date },
    updatedAt : { default: new Date },
    createdby : { type: Schema.Types.ObjectId, ref : 'User' },
    updatedby : { type: Schema.Types.ObjectId, ref : 'User' },
};

/**
 * The function `Model` creates a new mongoose model with default properties and additional properties
 * passed as arguments.
 * @returns The function `Model` is returning another function.
 */
const Model = defaultProps => {
    return (name, props) => {
        const schema = mongoose.schema({
            ...defaultProps,
            ...props
        });

        return mongoose.model(name, schema);
    };
};


export const withAudit = Model(auditProps);


// in other file

withAudit('Product', {
    name: String,
    desc: String
});