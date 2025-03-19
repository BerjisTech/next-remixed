import _currentPoll from "@/app/polls/(components)/_currentPoll";

const PollsPage = () => {
  return (
    <>
      <_currentPoll />

      <div className="flex flex-col gap-6 pt-6">
        {/*<h2 className="font-merriweather text-xl font-semibold text-grey-700">Previous polls</h2>*/}
      </div>
    </>
  );
};

export default PollsPage;
