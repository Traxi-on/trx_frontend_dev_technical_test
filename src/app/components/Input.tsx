import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

interface Props {
  type: 'search' | 'text';
  placeholder: string;
}

export default function Input(props: Props) {
  return (
    <div className='relative w-full'>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={clsx(
          'w-full p-2 pl-10',
          'rounded-md',
          'appearance-none caret-brand',
          'focus:outline-brand border'
        )}
      />
      {props.type === 'search' && (
        <MagnifyingGlassIcon className='w-6 absolute text-brand top-2 left-2' />
      )}
    </div>
  );
}
