import React from "react";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Checkbox } from "@/components/shadcn/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";

const StepThree = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
  return (
    <div className="p-8 bg-accent rounded-lg border-t-primary">
      {/* General Interpreting Rate */}
      <h2 className="text-primary font-semibold mb-4 text-2xl">Payment information</h2>

      <label className="block text-grey-700 font-medium mb-2">General interpreting rate</label>
      <div className="flex items-center space-x-2 mb-4">
        <Input type="number" placeholder="4" className="w-20" />
        <span className="text-grey-700">per hour</span>
        <Select>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
            <SelectItem value="gbp">GBP</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-primary text-sm">(0.07 USD per minute)</span>
      </div>

      <p className="text-grey-700 text-sm mb-6">
        Specify the hourly rate at which you are willing to accept interpreting work. Please use a
        period (.) for the decimal mark, not a comma (,).
      </p>

      {/* Specific Rates Table */}
      <h3 className="text-grey-700 font-semibold mb-2">Specific rates</h3>
      <div className="border rounded-lg shadow mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Language pair</TableHead>
              <TableHead>VRI On-demand</TableHead>
              <TableHead>VRI Scheduled</TableHead>
              <TableHead>OPI On-demand</TableHead>
              <TableHead>OPI Scheduled</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
              <TableCell>Lorem</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Documents Section */}
      <h3 className="text-grey-700 font-semibold mb-2">Documents</h3>
      <p className="text-grey-700 mb-2">
        Upload at least one file for each type of document for your screening application process.
      </p>
      <p className="text-grey-700 mb-2 text-sm">
        Compatible formats: .pdf, .doc, .docx, .png, .jpg.
      </p>
      <p className="text-grey-700 mb-4 text-sm">
        Free users can upload one file up to <strong>1MB</strong> for each document type. Paying
        ProZ.com members may upload several files of each type
        <strong> (except ID documents) </strong> up to <strong>6MB</strong>.{" "}
        <a href="https://www.proz.com/professional-membership" className="text-primary underline">
          Learn more about ProZ.com membership
        </a>
      </p>

      {/* Add Certificate Button */}
      <Button className="flex items-center mb-4">
        <span className="mr-2">➕</span> Add new certificate
      </Button>
      <p className="text-grey-700 text-sm mb-6">
        <strong>Note:</strong> save your profile after adding or removing documents.
      </p>

      {/* Partners Section */}
      <h3 className="text-grey-700 font-semibold mb-2">
        Partners you are interested in working with
      </h3>
      <p className="text-grey-700 mb-4 text-sm">
        ProZ.com partners may offer job opportunities to you as a member of this pool. More partners
        will be added in the future. Please select those that are of interest. This information will
        not be shown publicly.
      </p>

      {/* Partner Checkboxes */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {["Boostlingo", "Jeenie", "MCIS"].map((partner) => (
          <label key={partner} className="flex items-center">
            <Checkbox className="mr-2" />
            {partner}
          </label>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button onClick={nextStep} className="bg-primary text-white">
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
