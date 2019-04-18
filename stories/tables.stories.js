import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios } from '@storybook/addon-knobs'


import { Theme, defaultTheme, Area, Margin, Table, Popup, Badge } from '../src'

const ContexMenu = (
  <Popup.ContextMenu>
    <Popup.MenuItem>Item 4.1</Popup.MenuItem>
    <Popup.MenuItem>Item 4.2</Popup.MenuItem>
    <Popup.MenuItem>Item 4.3</Popup.MenuItem>
  </Popup.ContextMenu>
)

storiesOf('Tables', module)
  .addDecorator(withKnobs)
  .add('component', () => {
    const typeOptions = {
      Light: 'light',
      Transparent: 'transparent'
    }

    const tableTypeValue = radios('Table type', typeOptions, 'light')

    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="20px">
          <div>
            <Area kind="fg">
              <Table kind={tableTypeValue}>
                <Table.Header>
                  <Table.Row>
                    <Table.Cell>Note</Table.Cell>
                    <Table.Cell>Labels</Table.Cell>
                    <Table.Cell>Who</Table.Cell>
                    <Table.Cell>Date</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.RowLink>
                    <Table.Cell>
                      Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
                      Manduma pindureta quium dia nois paga. Paisis, filhis, espiritis santis. Leite de capivaris, leite de mula manquis sem cabeça.
                    </Table.Cell>
                    <Table.Cell><Badge active kind="address">Address</Badge></Table.Cell>
                    <Table.Cell>Janne Musta</Table.Cell>
                    <Table.Cell>09.04.2019 (08:04)</Table.Cell>
                    <Table.Cell>{ContexMenu}</Table.Cell>
                  </Table.RowLink>
                  <Table.Row>
                    <Table.Cell>
                      Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
                      Manduma pindureta quium dia nois paga. Paisis, filhis, espiritis santis. Leite de capivaris, leite de mula manquis sem cabeça.
                      Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
                      Manduma pindureta quium dia nois paga. Paisis, filhis, espiritis santis. Leite de capivaris, leite de mula manquis sem cabeça.
                    </Table.Cell>
                    <Table.Cell><Badge active kind="payment">Payment</Badge></Table.Cell>
                    <Table.Cell>Janne Musta</Table.Cell>
                    <Table.Cell>09.04.2019 (08:04)</Table.Cell>
                    <Table.Cell>{ContexMenu}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
                    </Table.Cell>
                    <Table.Cell>
                      <Margin selector="> *" value="0px 0px 5px 0px">
                        <Badge active kind="nogo">nogo</Badge>
                        <Badge active kind="voucher">Voucher</Badge>
                      </Margin>
                    </Table.Cell>
                    <Table.Cell><div style={{ 'whiteSpace': 'nowrap' }}>Veronika A. Porshe</div></Table.Cell>
                    <Table.Cell><div style={{ 'whiteSpace': 'nowrap' }}>09.04.2019 (08:04)</div></Table.Cell>
                    <Table.Cell>{ContexMenu}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Area>
          </div>
        </Margin>
      </Theme>
    )
  })