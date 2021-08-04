window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3916","name":"stg_jobready.drawdown_report_histories","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ARC Data Warehouse","id":"d6"}},{"field":"Schema","value":"stg_jobready"},{"field":"Name","value":"drawdown_report_histories"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-36201","object_id":"column-36201","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36202","object_id":"column-36202","name":"created_role_user_id","name_without_path":"created_role_user_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36203","object_id":"column-36203","name":"total_weeks","name_without_path":"total_weeks","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36204","object_id":"column-36204","name":"weeks_to_date","name_without_path":"weeks_to_date","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36205","object_id":"column-36205","name":"weeks_remaining","name_without_path":"weeks_remaining","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36206","object_id":"column-36206","name":"drawdown_id","name_without_path":"drawdown_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36207","object_id":"column-36207","name":"role_client_id","name_without_path":"role_client_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36208","object_id":"column-36208","name":"daily_rate","name_without_path":"daily_rate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36209","object_id":"column-36209","name":"total_deferred_paid","name_without_path":"total_deferred_paid","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36210","object_id":"column-36210","name":"earned_amount_to_date","name_without_path":"earned_amount_to_date","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36211","object_id":"column-36211","name":"earned_amount_available","name_without_path":"earned_amount_available","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36212","object_id":"column-36212","name":"unearned_amount","name_without_path":"unearned_amount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36213","object_id":"column-36213","name":"total_amount_in_the_period","name_without_path":"total_amount_in_the_period","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36214","object_id":"column-36214","name":"created_at","name_without_path":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36215","object_id":"column-36215","name":"updated_at","name_without_path":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-36216","object_id":"column-36216","name":"number_of_weeks_to_date_in_this_period","name_without_path":"number_of_weeks_to_date_in_this_period","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2021-08-04 00:01"};