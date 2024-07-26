import { Button, Heading, TextField } from '@radix-ui/themes';

export default function PersonCreate(): React.ReactNode {
  return (
    <>
      <Heading as="h1" size="8" className="text-dark">Person</Heading>
      <div className="flex flex-col mt-6">
        <TextField.Root placeholder="Name" />
        <TextField.Root placeholder="Age" type="number"/>
        <div className="w-full flex flex-row justify-between">
          <Button className="w-full font-semibold">Create</Button>
        </div>
      </div>
    </>
  )
}