import { ReactComponent as Logo } from '/src/assets/logo.svg';

function Cover() {

  return (
    <section className="bg-[#eee7d7] w-64 h-[480px] flex items-center flex-col p-24">
      <h2 className="sr-only">Sang Messenger</h2>
      <Logo className="w-36 mb-12" />
      <strong className='text-3xl text-[#555454]'>SANG</strong>
      <strong>MESSENGER</strong>
    </section>
  );
}

export default Cover;
