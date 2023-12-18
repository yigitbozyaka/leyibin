import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="min-h-screen bg-primary text-quaternary flex items-center justify-center">
            <ReactLoading className='pt-6' type={'spin'} color={'#F1F0E8'} height={60} width={60} />
        </div>
    );
}

export default Loading