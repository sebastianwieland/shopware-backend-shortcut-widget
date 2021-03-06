/**
 * Shopware Backend Shortcut Widget
 * Copyright (C) 2016  Sebastian Wieland
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Created by Sebastian Wieland <sebasti@nwie.land> on 2016-03-21.
 */
//{block name="backend/sebastian_wieland_shortcut_widget/model/parameter"}
Ext.define('Shopware.apps.SebastianWielandShortcutWidget.model.Parameter', {
    extend: 'Shopware.data.Model',

    configure: function () {
        var me = this;

        return {
            listing: 'Shopware.apps.SebastianWielandShortcutWidget.view.detail.Parameter'
        }
    },

    fields: [
        //{block name="backend/sebastian_wieland_shortcut_widget/model/parameter/fields"}{/block}
        { name: 'id', type: 'int', useNull: true },
        { name: 'name', type: 'string' },
        { name: 'type', type: 'int', defaultValue: 3 },
        { name: 'value', type: 'string' },
        { name: 'shortcutId', type: 'int' }
    ]
});
//{/block}