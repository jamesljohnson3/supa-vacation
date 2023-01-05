import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react';
import { SparklesIcon, MailOpenIcon, XIcon } from '@heroicons/react/outline';
import Input from '../components/Input';
import { Formik, Form } from 'formik';

const Confirm = ({ show = false, email = '' }) => (
<Transition appear show={show}>
<div className="fixed inset-0 z-50">
<Transition.Child
enter="ease-out duration-300"
enterFrom="opacity-0"
enterTo="opacity-100"
leave="ease-in duration-200"
leaveFrom="opacity-100"
leaveTo="opacity-0"
>
<div className="fixed inset-0 bg-white" />
</Transition.Child>

Copy code
  <Transition.Child
    enter="ease-out duration-300"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <div className="flex items-center justify-center h-full p-8">
      <div className="overflow-hidden transition-all transform">
        <h3 className="text-center text-lg font-medium leading-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <MailOpenIcon className="w-12 h-12 shrink-0 text-rose-500" />
          </div>
          <p className="text-2xl font-semibold mt-2">Confirm your email</p>
        </h3>

        <p className="text-lg text-center mt-4">
          We emailed a magic link to <strong>{email ?? ''}</strong>.
          <br />
          Check your inbox and click the link in the email to login or sign
          up.
        </p>
      </div>
    </div>
  </Transition.Child>
</div>
  </Transition>
);
const AuthModal = ({ show = false, onClose = () => null }) => {
const [disabled, setDisabled] = useState(false);
const [showConfirm, setConfirm] = useState(false);
const [showSignIn, setShowSignIn] = useState(false);

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
    setConfirm(true);
    toast.dismiss(toastId);
    } catch (err) {
    toast.error('Unable to sign in', { id: toastId });
    } finally {
    setDisabled(false);
    }
    };
    
    const signInWithGoogle = () => {
    toast.loading('Redirecting...');
    setDisabled(true);
    // Perform sign in
    signIn('google', {
    callbackUrl: window.location.href,
    });
    };
    
    const closeModal = () => {
    setConfirm(false);
    setShowSignIn(false);
    onClose();
    };
    
    return (
    <Dialog
       open={show}
       onClose={closeModal}
       className="h-full min-w-sm rounded-md shadow-lg"
     >
    <div className="h-full rounded-md shadow-xs">
    <div className="overflow-hidden relative rounded-md rounded-t-none">
    <div className="relative z-10 px-4 py-5 text-center sm:px-6 lg:px-8">
    <SparklesIcon className="w-20 h-20 text-center text-white" />
    <h3 className="mt-2 text-3xl leading-9 font-extrabold text-center text-white sm:text-4xl sm:leading-10">
    Welcome to our site!
    </h3>
    <div className="mt-3 text-base leading-6 text-center text-gray-300">
    <p>
    To access the site, please sign in or create an account. You can
    use your email or sign in with Google.
    </p>
    </div>
    </div>
    <div className="relative px-4 py-6 text-center sm:px-6 lg:px-8">
    {showConfirm ? (
    <Confirm show={showConfirm} email={email} />
    ) : (
    <Formik
    initialValues={{ email: '' }}
    validationSchema={SignInSchema}
    onSubmit={handleSubmit}
    >
    {({ isSubmitting }) => (
    <Form>
    <Input
                       type="email"
                       name="email"
                       placeholder="Enter your email"
                       label="Email"
                     />
    <div className="mt-6 rounded-md shadow-sm">
    <button
    type="submit"
    disabled={disabled || isSubmitting}
    className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800"
    >
    Sign in with email
    </button>
    </div>
    <div className="mt-3 rounded-md shadow-sm">
    <button
    type="button"
    disabled={disabled}
    onClick={signinWithGoogle}
    className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800"
    >
    Sign in with Google
    </button>
    </div>
    </Form>
    )}
    </Formik>
    )}
    </div>
    <div className="relative px-4 py-4 bg-white sm:px-6 lg:px-8 lg:py-6">
    <div className="absolute top-0 right-0 z-20">
    <button
                 onClick={closeModal}
                 className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                 aria-label="Close"
               >
    <XIcon className="w-6 h-6 text-gray-400" />
    </button>
    </div>
    <div className="relative flex items-center justify-between">
    <div className="ml-3 text-base leading-6 font-medium text-gray-900">
    Dont have an account?
    </div>
    <div className="ml-3 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
    <Link href="/sign-up">
    <a>Sign up</a>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Dialog>
    );
    };
    
    AuthModal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    };
    
    export default AuthModal;