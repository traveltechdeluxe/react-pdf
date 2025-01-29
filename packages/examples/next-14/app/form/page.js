'use client';

import dynamic from 'next/dynamic';
import {
  Document,
  Page,
  View,
  Text,
  Checkbox,
  FormField,
  TextInput,
  Select,
  List,
  RadioButton,
} from '@react-pdf/renderer';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export default function Form() {
  const doc = (
    <Document>
      <Page>
        <View
          style={{
            backgroundColor: 'rgba(182,28,28,0.62)',
            width: '30%',
            height: '100%',
          }}
        >
          <FormField name="user-info" style={{ flexDirection: 'column' }}>
            <Text>TextInput</Text>
            <TextInput
              name="username"
              value="foo"
              align="center"
              style={{ height: '50px' }}
            />

            {/* Nested works as well */}
            <View>
              <Text>TextInput</Text>
              <TextInput
                name="password"
                value="bar"
                align="center"
                style={{ height: '50px' }}
                password
              />
            </View>

            <Text>Checkbox (not checked)</Text>
            <Checkbox name="checkbox-default" style={{ height: '20px' }} />

            <Text>Checkbox (checked)</Text>
            <Checkbox
              name="checkbox-checked"
              checked
              style={{ height: '20px' }}
            />

            <View>
              <Text>RadioButton</Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  backgroundColor: '#eeeeee',
                  padding: 10,
                }}
              >
                <RadioButton
                  name="radio-button"
                  style={{ height: '20px', width: '20px' }}
                  exportValues={['A']}
                  value="A"
                  defaultValue="A"
                  checked
                />
                <Text>Radiobutton A</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  backgroundColor: '#eeeeee',
                  padding: 10,
                }}
              >
                <RadioButton
                  name="radio-button"
                  style={{ height: '20px', width: '20px' }}
                  exportValues={['B']}
                  value="A"
                  defaultValue="A"
                />
                <Text>Radiobutton B</Text>
              </View>
            </View>

            <Text>Select</Text>
            <Select
              name="combo"
              select={['', 'option 1', 'option 2']}
              value=""
              defaultValue=""
              style={{ height: '20px' }}
            />

            <Text>List</Text>
            <List
              name="list"
              select={['', 'option 1', 'option 2']}
              value=""
              defaultValue=""
              style={{ height: '50px' }}
            />
          </FormField>
        </View>
      </Page>

      <Page>
        <View
          style={{
            backgroundColor: 'rgba(182,28,28,0.62)',
            width: '30%',
            height: '100%',
          }}
        >
          <FormField name="user-details" style={{ flexDirection: 'column' }}>
            <Text>TextInput (multiline)</Text>
            <TextInput
              name="details"
              value="hello"
              align="center"
              multiline
              style={{ fontSize: 8, height: '100px' }}
            />
          </FormField>
        </View>
      </Page>

      <Page>
        <View
          style={{
            backgroundColor: 'rgba(182,28,28,0.62)',
            width: '30%',
            height: '100%',
          }}
        >
          <Text>TextInput (no FormField)</Text>
          <TextInput
            name="textinput-no-formfield"
            value="no formfield"
            align="center"
            style={{ height: '50px' }}
          />

          <Text>Checkbox (checked, no FormField)</Text>
          <Checkbox
            name="checkbox-no-formfield"
            checked
            style={{ height: '20px' }}
          />
        </View>
      </Page>
    </Document>
  );

  return <PDFViewer className="w-full h-svh">{doc}</PDFViewer>;
}
