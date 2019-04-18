import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, defaultTheme, Form, Margin, Area } from '../src'

const autocompleteList = [
  'bruno@bruno.de',
  'rodolfo@rodolfo.de',
  'sebastian@sebastian.de'
]

storiesOf('Froms', module)
  .add('components', () => {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> div" value="20px">
          <div>
            <Area kind="bg">
              <h3>Text Inputs</h3>
              <Margin selector="> div" value="10px 0px 10px 0px">
                <Form.InputText autocompleteList={autocompleteList} kind="primary" config={{ type:'text', placeholder: 'I\'m a normal text input with placeholder with primary color' }} />
                <Form.InputText kind="default" config={{ type:'text', placeholder: 'I\'m a normal text input ' }} />
                <Form.InputText autocompleteList={autocompleteList} kind="success" config={{ type:'text', placeholder: 'Search...' }} icon="search" />
                <Form.InputText kind="danger" config={{ type:'text', placeholder: 'Some text...' }} icon="bomb" />
                <Form.InputText kind="warning" config={{ type:'text', placeholder: 'Some placeholder text...' }} icon="bug" />
                <Form.InputText config={{ type:'text', placeholder: 'Rocket', disabled: true }} icon="rocket" />
              </Margin>
            </Area>
            <Area kind="bg">
              <h3>Checkboxes</h3>
              <Form.Checkbox kind="primary" label="pop" group="ex" id="checkbox1" value="checkbox1" />
              <Form.Checkbox kind="default" label="rock" group="ex" id="checkbox2" value="checkbox2" />
              <Form.Checkbox kind="success" label="funk" group="ex" id="checkbox3" value="checkbox3" />
              <Form.Checkbox kind="danger" label="samba" group="ex" id="checkbox4" value="checkbox4" />
              <Form.Checkbox kind="warning" label="hiphop" group="ex" id="checkbox5" value="checkbox5" />
              <Form.Checkbox kind="danger" label="pagode" group="ex" id="checkbox6" value="checkbox6" config={{ disabled: true }} />
            </Area>

            <Area kind="bg">
              <h3>Radiobuttons</h3>
              <Form.Radiobutton kind="primary" label="pop" group="rd" id="radio1" value="radio1" />
              <Form.Radiobutton kind="default" label="rock" group="rd" id="radio2" value="radio2" />
              <Form.Radiobutton kind="success" label="funk" group="rd" id="radio3" value="radio3" />
              <Form.Radiobutton kind="danger" label="samba" group="rd" id="radio4" value="radio4" />
              <Form.Radiobutton kind="warning" label="hiphop" group="rd" id="radio5" value="radio5" />
              <Form.Radiobutton kind="danger" label="pagode" group="rd" id="radio6" value="radio6" config={{ disabled: true }} />
            </Area>

            <Area kind="bg">
              <h3>Select input</h3>
              <Margin selector="div" value="10px 0px 10px 0px">
                <Form.Select icon="at">
                  <option>sebastian@sebastian.de</option>
                  <option>rodolfo@rodolfo.de</option>
                  <option>bruno@bruno.de</option>
                </Form.Select>
                <Form.Select icon="seedling" kind="default">
                  <option>Angeratum</option>
                  <option>Marigold</option>
                </Form.Select>
                <Form.Select kind="default">
                  <option>Angeratum</option>
                  <option>Marigold</option>
                </Form.Select>
              </Margin>
            </Area>
            <Area kind="bg">
              <h3>Text Areas</h3>
              <Margin selector="textarea" value="10px 0px 10px 0px">
                <p>Resizable text area</p>
                <Form.TextArea kind="default" height='80px' defaultValue="Sample value" resize></Form.TextArea>
                <p>not resizable text area</p>
                <Form.TextArea kind="primary" height='100px' />
              </Margin>
            </Area>
          </div>
        </Margin>
      </Theme>
    )
  })