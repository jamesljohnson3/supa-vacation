import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

const Page = () => {
const [disabled, setDisabled] = useState(false);

const handleSubmit = async ({ email }) => {
let toastId;
try {
toastId = toast.loading('Loading...');
setDisabled(true);
// Perform sign in
const { error } = await signIn('email', {
redirect: false,
callbackUrl: window.location.href,
email,
});
// Something went wrong
if (error) {
throw new Error(error);
}
toast.dismiss(toastId);
} catch (err) {
toast.error('Unable to sign in', { id: toastId });
} finally {
setDisabled(false);
}
};

return (
<form onSubmit={handleSubmit}>
<input type="email" name="email" />
<button type="submit" disabled={disabled}>
Sign in with email
</button>
</form>
);
};

export default Page;