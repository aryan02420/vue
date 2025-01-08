`<Context.Provider :value={} />`

The value prop of the context provider component can only accept an object type, wile React allows simple primitive values to also be passed as the value prop.

This branch aims to add support for simple primitive values to be passed as the value prop of the context provider component.

It involved converting the props.value to a re using toRef and using the .value accessor in the consumer component.

All test cases are currently passing.

However, there are now type issues in older examples where a ref field inside a reactive object is not being inferred properly. I also had to typecast and convert the defaultValue to a ref.
